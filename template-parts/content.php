<?php
/**
 * Template part for displaying posts.
 *
 * @package QOD_Starter_Theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div id="entryContent" class="entry-content">
		<?php the_excerpt(); ?>
	</div><!-- .entry-content -->

	<div id="entryMeta" class="entry-meta">
		<?php the_title() ?>
	</div><!-- .entry-meta -->

</article><!-- #post-## -->

<?php if ( is_home() || is_single() ) : ?>
	<button type="button" id="newQuoteButton">Show Me Another!</button>
<?php endif; ?>