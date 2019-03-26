<?php
wp_enqueue_script("jquery");
// Exit if accessed directly
if (!defined('ABSPATH')) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:
require 'functions-divi.php';

if (!function_exists('chld_thm_cfg_parent_css')) :
    function chld_thm_cfg_parent_css()
{
    wp_enqueue_style('chld_thm_cfg_parent', trailingslashit(get_template_directory_uri()) . 'style.css', array());
}
endif;
add_action('wp_enqueue_scripts', 'chld_thm_cfg_parent_css', 10);

function categories_list_func($atts)
{
    $categories = get_categories();

    if ($categories) {
        foreach ($categories as $category) {
            $output .= '<li class="cat-' . $category->cat_ID . '"><a href="' . get_category_link($category->term_id) . '" title="' . esc_attr(sprintf(__("Read more posts from : %s"), $category->name)) . '">' . $category->cat_name . ' (' . $category->category_count . ')</a></li>';
        }
        $second_output = trim($output);
    }
    $return_string = '<ul>' . $second_output . '</ul>';

    return $return_string;

} // END Categories
add_shortcode('footag', 'categories_list_func');

// END ENQUEUE PARENT ACTION
