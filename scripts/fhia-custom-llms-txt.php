<?php
/**
 * Plugin Name: FHIA Custom llms.txt
 * Description: Serves an enhanced llms.txt for LLM discoverability
 * Version: 1.0.0
 */

add_action('init', function() {
    if (isset($_SERVER['REQUEST_URI']) && $_SERVER['REQUEST_URI'] === '/llms.txt') {
        header('Content-Type: text/plain; charset=utf-8');
        header('X-Robots-Tag: noindex');
        echo file_get_contents(__DIR__ . '/fhia-llms-txt-content.txt');
        exit;
    }
});
