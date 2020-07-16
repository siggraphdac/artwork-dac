<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
 
    $parent_style = 'parent-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.
 
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );
}

session_start();
 
add_filter( 'posts_orderby', 'randomise_with_pagination' );
function randomise_with_pagination( $orderby ) {
 
    if( is_front_page() ) {
 
        // Reset seed on load of initial archive page
        if( ! get_query_var( 'paged' ) || get_query_var( 'paged' ) == 0 || get_query_var( 'paged' ) == 1 ) {
            if( isset( $_SESSION['seed'] ) ) {
                unset( $_SESSION['seed'] );
            }
        }
     
        // Get seed from session variable if it exists
        $seed = false;
        if( isset( $_SESSION['seed'] ) ) {
            $seed = $_SESSION['seed'];
        }
     
            // Set new seed if none exists
            if ( ! $seed ) {
                $seed = rand();
                $_SESSION['seed'] = $seed;
            }
     
            // Update ORDER BY clause to use seed
            $orderby = 'RAND(' . $seed . ')';
    }
 
    return $orderby;
}

function my_custom_scripts() {
    wp_enqueue_script( 'custom-js', get_stylesheet_directory_uri() . '/custom.js', array( 'jquery' ),'',true );
}
add_action( 'wp_enqueue_scripts', 'my_custom_scripts' );