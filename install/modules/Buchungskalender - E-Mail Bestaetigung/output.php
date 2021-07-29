<?php
if (rex_request('success','int') == 1) {
    $text = rex_session('buka_message');
} else {
    $text = 'Fehler';    
}
rex_set_session('buka_message','');
?>
<section class="uk-section">
    <div class="uk-container uk-container-small">
        <h1>Bestätigungslink wurde aktiviert</h1>
        <p><?= $text ?></p>
    </div>
</section>