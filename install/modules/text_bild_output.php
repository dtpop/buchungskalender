<?php
$val1 = rex_var::toArray("REX_VALUE[1]");
$val19 = array_merge([
    'topmargin' => '',
    'textwidth' => 'uk-container-small',

    ], rex_var::toArray("REX_VALUE[19]"));



// dump($val1);
// dump($val19);
$media = rex_media::get("REX_MEDIA[1]");

preg_match_all('/__Jahre_seit_(\d\d\d\d-\d\d-\d\d)__/', $val1['maintext'], $matches, PREG_SET_ORDER);
// dump($matches);
if ($matches) {
    foreach ($matches as $match) {
        $birthDate = explode("-", $match[1]);
        //get age from date or birthdate
        $age = (date("md", date("U", mktime(0, 0, 0, $birthDate[1], $birthDate[2], $birthDate[0]))) > date("md") ? ((date("Y") - $birthDate[0]) - 1) : (date("Y") - $birthDate[0]));
        $val1['maintext'] = str_replace($match[0], $age, $val1['maintext']);
    }
}

?>
<!-- 010  ###  -->

<?php if ($val19['layout'] == 'small-text-center') : ?>

    <div class="uk-section <?= isset($val19['topmargin']) && $val19['topmargin'] ? ' small-padding-top' : '' ?>">
        <div class="uk-container uk-container-small text-container">
            <?php if ($val1['headline']) : ?>
                <h<?= $val19['headline_type'] ?? '' ?> class="uk-h<?= $val19['headline_type'] ?>"><?= $val1['headline'] ?></h<?= $val19['headline_type'] ?? '' ?>>
            <?php endif ?>
            <?= $val1['maintext'] ?>
            <?php if ($media) : ?>
                <img src="<?= rex_media_manager::getUrl('full', $media); ?>">
            <?php endif ?>
        </div>
    </div>

<?php else : ?>
    <?php if ($val1['headline'] . $val1['maintext']) : ?>
        <div class="uk-section <?= $val19['topmargin'] ?>">
            <div class="uk-container <?= $val19['textwidth'] ?> text-container">
                <div class="" uk-grid>
                    <div class="uk-width-1-1">
                        <?php if ($val1['headline']) : ?>
                            <h<?= $val19['headline_type'] ?? '' ?> class="uk-h<?= $val19['headline_type'] ?? '' ?>"><?= $val1['headline'] ?></h<?= $val19['headline_type'] ?? '' ?>>
                        <?php endif ?>
                        <?= $val1['maintext'] ?>
                    </div>
                </div>
            </div>
        </div>
    <?php endif ?>
    <?php if ($media) : ?>
        <div class="uk-section <?= $val19['background'] ?? '' ?> <?= $val19['padding'] ?? '' ?> <?= !($val1['headline'] . $val1['maintext']) ? $val19['topmargin'] : '' ?> uk-padding-remove-horizontal text-container">
            <div class="uk-container uk-container-wide">
                <?php if ($val19['layout'] == 'image_left') : ?>
                    <div uk-grid>
                        <div class="uk-width-2-3@m">
                            <?php if ($media) : ?>
                                <img src="<?= rex_media_manager::getUrl('half', $media); ?>" class="uk-image-responsive">
                            <?php endif ?>
                        </div>
                        <div class="uk-width-1-3@m uk-text-small">
                            <?= $val1['sidetext'] ?>
                        </div>
                    </div>
                <?php elseif ($val19['layout'] == 'image_right') : ?>
                    <div uk-grid>
                        <div class="uk-width-1-3@m uk-text-small">
                            <?= $val1['sidetext'] ?>
                        </div>
                        <div class="uk-width-2-3@m">
                            <?php if ($media) : ?>
                                <img src="<?= rex_media_manager::getUrl('half', $media); ?>">
                            <?php endif ?>
                        </div>
                    </div>

                <?php elseif ($val19['layout'] == 'image_wide') : ?>
                    <?php if ($media) : ?>
                        <img src="<?= rex_media_manager::getUrl('full', $media); ?>" class="uk-width-1-1">
                    <?php endif ?>
                    <?php if ($val1['sidetext']) : ?>
                        <div class="uk-text-small uk-margin-small-top bildunterschrift--imagewide">
                            <?= $val1['sidetext'] ?>
                        </div>
                    <?php endif ?>
                <?php endif ?>
            </div>
        </div>
    <?php endif ?>
<?php endif ?>