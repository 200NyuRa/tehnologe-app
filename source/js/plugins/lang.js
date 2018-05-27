export default function(){
    const $lang = $(this);

    const iformat = icon => {
        const originalOption = icon.element;
        return '<div class="lang__field"><i class="lang__dropdown-icon lang__dropdown-icon_' + $(originalOption).data('icon') + '"></i> ' + icon.text + '</div>';
    }

    $lang.select2({
        dropdownParent: $lang.parent(),
        containerCssClass: 'lang__button',
        dropdownCssClass: 'lang__dropdown',
        templateSelection: iformat,
        templateResult: iformat,
        tags: false,
        minimumResultsForSearch: Infinity,
        width: 'style',
        escapeMarkup: text => {return text}
    });

    $lang.on('change', () => {
        this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);
    });
}
