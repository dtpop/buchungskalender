<?php

$css_classes = [];
if ($this->getElement('css_classes') != '') {
    $css_classes = explode(',', $this->getElement('css_classes'));
}

if (count($labels) > 1) {
    if (rex::isBackend()) {
        echo '<div class="rex-form-panel-footer">';
    }
    echo '<div class="btn-toolbar">';
}

foreach ($labels as $index => $label) {
    $classes = [];
    $classes[] = 'uk-button';
    $classes[] = 'uk-button-default';

    if (isset($css_classes[$index]) && trim($css_classes[$index]) != '') {
        $classes[] = trim($css_classes[$index]);
    }

    if ($this->getWarningClass() != '') {
        $classes[] = $this->getWarningClass();
    }

    $id = $this->getFieldId() . '-' . rex_string::normalize($label);
    $label_translated = rex_i18n::translate($label, true);

    echo '<button class="' . implode(' ', $classes) . '" type="submit" name="' . $this->getFieldName() . '" id="'. $id .'" value="' . htmlspecialchars($label) . '">' . $label_translated . '</button>';

    //echo '<button type="submit" class="uk-button uk-button-default icon icon--left '.implode(' ', $classes).'" name="'.$this->getFieldName().'" id="'.$id.'" value="'.$label.'" />'.$label.'</button>';
}

if (count($labels) > 1) {
    echo '</div>';
    if (rex::isBackend()) {
        echo '</div>';
    }
}
