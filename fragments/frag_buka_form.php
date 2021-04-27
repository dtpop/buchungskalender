<div class="rex-form-group form-group">
    <form method="GET" action="<?= rex_url::currentBackendPage() ?>" class="form-output">
        <input type="text" name="start_date" id="date_start" disabled="disabled">
        <input type="text" name="end_date" id="date_end" disabled="disabled">
        <input type="hidden" name="startdate" id="datestart">
        <input type="hidden" name="enddate" id="dateend">
        <input type="hidden" name="action" value="buka_sendbooking">
        <input type="hidden" name="page" value="buchungskalender/calendar">
        <button type="submit" id="booking_submit">buchen</button>
    </form>
</div>