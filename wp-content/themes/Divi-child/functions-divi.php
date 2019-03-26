<?php

// hack divi global footer
// function get_leet_divi_footer()
// {

//     if (is_woocommerce() || is_cart() || is_checkout() || is_shop() || is_404()) {
//         leet_divi_footer();
//     }

// }

// add_action('et_after_main_content', 'get_masso_divi_footer');

function leet_divi_footer()
{
        
        // footer post id
    $id = 75;
    
        // query database
    $footer = get_post($id);

    // print_r($footer);
    if (!$footer) return '';

    echo do_shortcode($footer->post_content);

}