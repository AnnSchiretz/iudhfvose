/**
 * Created by hanna on 14.5.17.
 */
(function(){
    $(document).ready(function(){
        $('.btn-success').click(function(){
            let textNotification = $('.to-do-control').val();
            $('.to-do').append('<li><span class="content">' + textNotification + '</span> <i class="fa fa-times" aria-hidden="true"></i></li>');
            $('.to-do-control').val(''); //clear input
        });

        $('ul').on('click', 'li>span.content', function () {
            if ($(this).hasClass('done')) {
                $(this).removeClass('done');
            } else {
                $(this).addClass('done');
            }
        });

        $('ul').on('click' , "li>.fa-times", function() {
            $(this).parent().remove();
        })
    });
})();
