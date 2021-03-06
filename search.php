<?php
/**
 * The template for displaying Search Results pages
 *
 * @package WordPress
 * @subpackage Artwork
 * @since Artwork 1.0
 */

get_header();
?>
<div class="container main-container">
    <div class="row clearfix">
        <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h1 class="page-title">Search Results</h1>

            <?php if (have_posts()) : ?>             
                <?php /* The loop */ ?>
                <?php while (have_posts()) : the_post(); ?>
                    <?php get_template_part('content', 'search'); ?>
                <?php endwhile; ?>
                <?php mp_artwork_content_nav('nav-below'); ?>
                <?php else : ?>
                <article id="post-0" class="post no-results not-found">
                    <div class="entry-content">
                        <h3 class="entry-title"><?php esc_html_e('Nothing Found', 'artwork-lite'); ?></h3>
                        <p><?php esc_html_e('Sorry, but nothing matched your search criteria. Please try again with some different keywords.', 'artwork-lite'); ?></p>
                    </div><!-- .entry-content -->
                </article><!-- #post-0 -->
            <?php endif; ?>

        </div>
    </div>
</div>
<?php get_footer(); ?>

