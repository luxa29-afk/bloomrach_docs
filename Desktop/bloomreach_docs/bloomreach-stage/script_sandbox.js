// variable for append child only once
let isPageLoad = false;
$(window).on('pageLoad', function (e, state) {
    $('.hub-subheader-breadcrumbs').remove();
    $('.hub-reference-section.hub-reference-section-code').attr('style', 'display:block');
    $('#hub-search').attr('style', 'display:inline !important');

    if (document.URL === "https://docs.exponea.com/page/hashpage") {

        createGui();
        var labelOut;
        var publicKeyInput;
        var privateKeyInput;


        function createGui() {
            //Locate the body
            var body = document.getElementsByTagName("body")[0];
            var hashButton = document.createElement("button");
            var divIn = document.getElementById("myDiv");


            //Initialise the inputs
            //public key input
            publicKeyInput = document.createElement("input");
            publicKeyInput.id = "publicKey";
            publicKeyInput.value = "Your public key";
            //private key input
            privateKeyInput = document.createElement("input");
            privateKeyInput.id = "privateKey";
            privateKeyInput.value = "Your private key";
            //button to run the script

            hashButton.addEventListener("click", hash);
            hashButton.innerHTML = "Hash the keys";
            //label for output
            labelOut = document.createElement("label");
            labelOut.innerHTML = "Output:";
            labelOut.id = "output";


            //Append the inputs
            body.appendChild(divIn);

            divIn.appendChild(publicKeyInput);
            divIn.appendChild(privateKeyInput);
            divIn.appendChild(hashButton);
            divIn.appendChild(labelOut);


            divIn.style.position = "absolute";
            divIn.style.top = "25%";
            divIn.style.left = "8%";

            //


        }

        function hash() {

            var publicKey = publicKeyInput.value;
            var privateKey = privateKeyInput.value;

            var hashedKeys = window.btoa(publicKey + ":" + privateKey);

            labelOut.innerHTML = hashedKeys;

        }


    }

    $(".menu-item-wrapper .title").click(function () {
        if (!$(this).closest('.menu-item-wrapper').find('.list-unstyled:visible').length) {
            $('.menu-item-wrapper').removeClass("show")
            $(this).closest('.menu-item-wrapper').addClass('show');
        } else {
            $(this).closest('.menu-item-wrapper').toggleClass("show")
        }
        $('.menu-item-wrapper').find('.list-unstyled').stop().slideUp();
        $(this).closest('.menu-item-wrapper').find('.list-unstyled').stop().slideToggle();
    });
    const urlPath = document.location.pathname.split('/');
    $('#ssr-main .rm-Header .rm-Header-top .rm-Header-top-link[to*="' + urlPath[1] + '"]').addClass("top-active");

    $('.Dropdown .Button_slate_text').click();

    setTimeout(function () {
        let versionName = $('.Dropdown-content .icon-check1').prev().children().last().html();
        $('.Dropdown .Button_slate_text span:first-child').html(versionName)
    }, 10);
    setTimeout(function () {
        $('.Dropdown .Button_slate_text').click();
    }, 20);

    $("#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .rm-Header-top-link:nth-of-type(6)").removeAttr("href").removeAttr("target");
    $("#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .NavItem-item1gDDTqaXGhm1:last-child").removeAttr("href").removeAttr("target").removeAttr("to");

    let content = `
        <div class="dropdown-menu-link">
            <ul>
                <li class="dropdown-nav-item"><a href="https://academy.bloomreach.com/" class="dropdown-nav-link">Academy</a></li>
                <li class="dropdown-nav-item"><a href="https://www.bloomreach.com/en/library" class="dropdown-nav-link">Resource Library</a></li>
                <li class="dropdown-nav-item"><a href="https://community.bloomreach.com/" class="dropdown-nav-link">Content Community</a></li>
                <li class="dropdown-nav-item"><a href="https://support.bloomreach.com/" class="dropdown-nav-link">Support</a></li>
                <li class="dropdown-nav-item"><hr id="next-steps-divider"><a href="https://www.bloomreach.com/en" class="dropdown-nav-link">Bloomreach</a></li>
            </ul>
        </div>
    `;
    let img = `<span class="icon-chevron"></span>`;

    if (!isPageLoad) {
        $("#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .rm-Header-top-link:nth-of-type(6)").append(content);
        $("#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .rm-Header-top-link:nth-of-type(6)").prepend(img);

        setTimeout(() => {
            $("#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .NavItem-item1gDDTqaXGhm1:last-child").append(content);
            $("#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .NavItem-item1gDDTqaXGhm1:last-child").prepend(img);
            $('#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .NavItem-item1gDDTqaXGhm1:last-child .dropdown-menu-link').addClass('dropdown-menu-link-show');
        }, 200);

        isPageLoad = true;
    }

    $('#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .rm-Header-top-link:nth-of-type(6)').off('click').on('click', function () {
        $(".dropdown-menu-link").toggleClass("dropdown-menu-link-show");
        $(".icon-chevron").toggleClass("dropdown-img-show");
    });


    // $('#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .NavItem-item1gDDTqaXGhm1:last-child').click(function () {
    //     $(".dropdown-menu-link").toggleClass("dropdown-menu-link-show");
    //     $(".icon-chevron").toggleClass("dropdown-img-show");
    // });
});

// Collapsible sidebar navigation - START
$(window).on('pageLoad', () => {
    console.log('testing - pageLoad');
    // $('.Sidebar-link_parent3OBrzjAJRSfq button.Sidebar-link-buttonWrapper3hnFHNku8_BJ').remove();
    $('.rm-Sidebar-section > .rm-Sidebar-list').addClass("section-collapsed");

    // if ($('.Sidebar-link_parent3OBrzjAJRSfq .Sidebar-link-textLuTE1ySm4Kqn').find('.icon-chevron-rightSidebar').length === 0)
    //     $('.Sidebar-link_parent3OBrzjAJRSfq .Sidebar-link-textLuTE1ySm4Kqn').prepend("<span class='icon-chevron-rightSidebar'></span>");

    if ($('.Sidebar-headingTRQyOa2pk0gh').children().length === 0) {
        $('.Sidebar-headingTRQyOa2pk0gh').prepend("<span class='icon-chevron'></span>");
    }

    $('.Sidebar-headingTRQyOa2pk0gh').off('click').on('click', function () {
        $(this).parent('.rm-Sidebar-section').toggleClass('active');
        $(this).toggleClass("section-expanded");
        $(this).next().toggleClass("section-collapsed");
        $(this).next().slideToggle("slow");

        setTimeout(() => {
            if ($(this).siblings('.rm-Sidebar-list').hasClass('shown')) {
                $(this).siblings('.rm-Sidebar-list').removeClass('shown');
            }

            if ($(this).siblings('.rm-Sidebar-list').hasClass('d-block')) {
                $(this).siblings('.rm-Sidebar-list').removeClass('d-block');
            }
        }, 450)
    });

    if ($('.rm-Sidebar-link.active').length > 0) {
        console.log('tu som?')
        $('.rm-Sidebar-link.active').closest('.rm-Sidebar-section').find('.rm-Sidebar-heading').addClass("section-expanded");
        $('.rm-Sidebar-link.active').closest('.rm-Sidebar-section').find('.rm-Sidebar-list').removeClass("section-collapsed");
        $('.rm-Sidebar-link.active').closest('.rm-Sidebar-section').find('.rm-Sidebar-list:not(.subpages)').slideDown();
        $('.rm-Sidebar-link.active').closest('.rm-Sidebar-section').addClass('active');

        setTimeout(() => {
            if ($('.rm-Sidebar-link.active:not(.childless)').length > 1) {
                $('.rm-Sidebar-link.active:not(.childless)').removeClass('active');
            }

            $('.rm-Sidebar-link.active.childless').closest('li.subnav-expanded').children('.rm-Sidebar-link').addClass('active');
        }, 1)

        if ($('.rm-Sidebar-link.active').closest('.rm-Sidebar-list.subpages').length > 0) {
            $('.rm-Sidebar-link.active').closest('.rm-Sidebar-list').slideDown();
        } else {
            $('.rm-Sidebar-link.active').parent().addClass("subnav-expanded");
            $('.rm-Sidebar-link.active').next().slideDown();
        }

    } else {
        console.log('testing - pageLoad - FALSE');
        $('.hub-sidebar-content .rm-Sidebar-section:first-child .rm-Sidebar-heading').click();
    }

    let heading = $('h3:contains("TEST UNCLICKABLE CATEGORY")');
    heading.addClass('unclickable')
    heading.children().remove()
    heading.siblings().remove()


    // $('').addClass("section-collapsed");
    /*
      let headings = document.getElementsByTagName('h3');
      for (let i of headings) {
          if i.innerHTML = "TEST UNCLICKABLE CATEGORY" {
          console.log("found");
          i.setAttribute("class", "separator-heading");
          }
   }

    */


});
// Collapsible sidebar navigation - END

// Observe changes on DOM - START
$(() => {
    const observer = new MutationObserver(function (mutations, observer) {
        $('.rm-Sidebar-list.subpages:visible').closest('.Sidebar-item23D-2Kd61_k3').addClass("subnav-expanded");
        $('.rm-Sidebar-list.subpages:hidden').closest('.Sidebar-item23D-2Kd61_k3').removeClass("subnav-expanded");

        $('.Sidebar-link_parent3OBrzjAJRSfq').off('click').on('click', function (e) {
            console.log('test')
            const href1 = $(this).attr('href');
            const href2 = $(this).next().find('.rm-Sidebar-link').eq(0).attr('href');

            if (href1 === href2) {
                e.preventDefault();
                $(this).closest('.Sidebar-item23D-2Kd61_k3').toggleClass("subnav-expanded");
                $(this).closest('.Sidebar-item23D-2Kd61_k3').find('.subpages').slideToggle('slow');

                if ($(this).closest('.Sidebar-item23D-2Kd61_k3').find('.subpages').hasClass('shown')) {
                    setTimeout(() => {
                        $(this).closest('.Sidebar-item23D-2Kd61_k3').find('.subpages').removeClass('shown');
                    })
                }
            } else if (href1 !== window.location.pathname) {
                $(this).parent().parent().addClass('d-block');

                setTimeout(() => {
                    $(this).addClass('active');
                }, 100)

                removeFeedbackFromTOC();
            }
        });

        $('.Sidebar-link_parent3OBrzjAJRSfq .Sidebar-link-textLuTE1ySm4Kqn button.Sidebar-link-buttonWrapper3hnFHNku8_BJ').off('click').on('click', function () {
            const href1 = $(this).closest('.rm-Sidebar-link').attr('href');
            const href2 = $(this).closest('.rm-Sidebar-link').next().find('.rm-Sidebar-link').eq(0).attr('href');

            if (href1 !== href2) {
                $(this).closest('.Sidebar-item23D-2Kd61_k3').toggleClass("subnav-expanded");
                $(this).closest('.Sidebar-item23D-2Kd61_k3').find('.subpages').slideToggle('slow');
            }
        });

        $('.rm-Sidebar-link.childless').on('click', function () {
            console.log('childless')
            $(this).parent().parent().parent().find('.rm-Sidebar-list').addClass('shown');
            $('.rm-Sidebar-link.subpage').parent().parent().parent().not($(this).parent().parent().parent()).find('.rm-Sidebar-list').slideUp(400);

            setTimeout(() => {
                $('.rm-Sidebar-link.subpage').parent().parent().parent().not($(this).parent().parent().parent()).find('.rm-Sidebar-list').removeClass('shown');
                // console.log($('.rm-Sidebar-link.subpage').parent().parent().parent().not($(this).parent().parent().parent()))
                $('.rm-Sidebar-link.subpage').parent().parent().parent().not($(this).parent().parent().parent()).removeClass('subnav-expanded');
                // $('.rm-Sidebar-link.subpage').parent().parent().parent().not($(this).parent().parent().parent()).find('.rm-Sidebar-list').hide();
                // li Sidebar-item23D-2Kd61_k3
                $('.rm-Sidebar-link.subpage').parent().parent().parent().not($(this).parent().parent().parent()).find('.rm-Sidebar-link.active').removeClass('active');
            }, 400)
        });

        $('a[href*="#"]').on('click', () => {
            $('.rm-Sidebar-section .rm-Sidebar-list:not(.subpages):not(.section-collapsed)').show();
            $('.subnav-expanded .rm-Sidebar-list.subpages').show();
        });

        $('.Pagination-link1SfnH-8-DxMA').off('click').on('click', () => {
            removeFeedbackFromTOC();
        });
    });

    observer.observe(document, {
        subtree: true,
        attributes: true
    });
});
// Observe changes on DOM - END

$(() => {
    $('.expand-content').hide();
    let hidden = true;

    $('.expand-trigger').on('click', () => {
        $('.expand-content').toggle();
        hidden = !hidden;
        return hidden ? $('.expand-trigger').find('span').text('Show') : $('.expand-trigger').find('span').text('Hide');
    });
});

// Progress bar - START
$(window).on('load', () => {
    $("div.progress-bar").appendTo("#ssr-main .rm-Header");
    $('.progress-bar').css('display', 'none');
    if (window.location.pathname.includes('/recipes')) {
        console.log('recipes')
        $('.progress-bar').css('top', '85px !important');
    }

    $(window).scroll(() => {
        let scroll = $(window).scrollTop();

        if (scroll > 100) $('.progress-bar').css('display', 'block');
        else $('.progress-bar').css('display', 'none');

        let pixels = $(document).scrollTop();
        let pageHeight = $(document).height() - $(window).height();
        let progress = 100 * pixels / pageHeight;

        $("div.progress-bar").css("width", progress + "%");
    });
});
// Progress bar - END

// Dark mode - START
const setDarkMode = () => {
    setTimeout(() => {
        localStorage.setItem('color-scheme', 'dark');
        $('html').attr('data-color-mode', 'dark');
    }, 100);
    $('.dark-mode-btn').prop('checked', true);
    $('.rm-Logo .rm-Logo-img').attr('src', 'https://files.readme.io/0e23000-small-br_docs-secondary.png');
    $('.footer .footer-main .logo-footer .logo-footer-dark').removeClass('d-none');
    $('.footer .footer-main .logo-footer .logo-footer-white').addClass('d-none');
    console.log('dark mode set');
}
const setLightMode = () => {
    setTimeout(() => {
        localStorage.setItem('color-scheme', 'light');
        $('html').attr('data-color-mode', 'light');
    }, 100);
    $('.dark-mode-btn').prop('checked', false);
    $('.rm-Logo .rm-Logo-img').attr('src', 'https://files.readme.io/3bec36a-small-br_docs-primary.png');
    $('.footer .footer-main .logo-footer .logo-footer-white').removeClass('d-none');
    $('.footer .footer-main .logo-footer .logo-footer-dark').addClass('d-none');
    console.log('light mode set');
}
$(window).on('pageLoad', () => {
    const darkMode = `
        <div class="dark-mode">
            <input class="dark-mode-btn" type="checkbox" id="toggle-mode"/>
            <svg class="light-mode-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_0_234)">
                <path d="M9.53125 3.125V1.25C9.53125 1.12568 9.58064 1.00645 9.66854 0.918544C9.75645 0.830636 9.87568 0.78125 10 0.78125C10.1243 0.78125 10.2435 0.830636 10.3315 0.918544C10.4194 1.00645 10.4688 1.12568 10.4688 1.25V3.125C10.4688 3.24932 10.4194 3.36855 10.3315 3.45646C10.2435 3.54436 10.1243 3.59375 10 3.59375C9.87568 3.59375 9.75645 3.54436 9.66854 3.45646C9.58064 3.36855 9.53125 3.24932 9.53125 3.125ZM14.8438 10C14.8438 10.958 14.5597 11.8945 14.0274 12.691C13.4952 13.4876 12.7387 14.1084 11.8536 14.475C10.9685 14.8417 9.99463 14.9376 9.05503 14.7507C8.11544 14.5638 7.25236 14.1025 6.57495 13.425C5.89754 12.7476 5.43622 11.8846 5.24932 10.945C5.06242 10.0054 5.15835 9.03146 5.52496 8.14638C5.89157 7.2613 6.51241 6.50481 7.30896 5.97257C8.10551 5.44033 9.042 5.15625 10 5.15625C11.2842 5.1577 12.5154 5.66848 13.4235 6.57655C14.3315 7.48462 14.8423 8.7158 14.8438 10ZM13.9062 10C13.9062 9.22742 13.6772 8.47218 13.2479 7.8298C12.8187 7.18742 12.2086 6.68675 11.4949 6.3911C10.7811 6.09544 9.99567 6.01808 9.23793 6.16881C8.48019 6.31953 7.78416 6.69157 7.23786 7.23786C6.69157 7.78416 6.31953 8.48019 6.16881 9.23793C6.01808 9.99567 6.09544 10.7811 6.3911 11.4949C6.68675 12.2086 7.18742 12.8187 7.8298 13.2479C8.47218 13.6772 9.22742 13.9062 10 13.9062C11.0356 13.905 12.0285 13.4931 12.7608 12.7608C13.4931 12.0285 13.905 11.0356 13.9062 10ZM4.66875 5.33125C4.71166 5.3773 4.76341 5.41424 4.82091 5.43986C4.87841 5.46548 4.94048 5.47926 5.00342 5.48037C5.06636 5.48148 5.12888 5.4699 5.18725 5.44633C5.24562 5.42275 5.29864 5.38766 5.34315 5.34315C5.38766 5.29864 5.42275 5.24562 5.44633 5.18725C5.4699 5.12888 5.48148 5.06636 5.48037 5.00342C5.47926 4.94048 5.46548 4.87841 5.43986 4.82091C5.41424 4.76341 5.3773 4.71166 5.33125 4.66875L4.08125 3.41875C3.99239 3.33595 3.87486 3.29087 3.75342 3.29302C3.63199 3.29516 3.51612 3.34435 3.43024 3.43024C3.34435 3.51612 3.29516 3.63199 3.29302 3.75342C3.29087 3.87486 3.33595 3.99239 3.41875 4.08125L4.66875 5.33125ZM4.66875 14.6687L3.41875 15.9187C3.3727 15.9617 3.33576 16.0134 3.31014 16.0709C3.28452 16.1284 3.27074 16.1905 3.26963 16.2534C3.26852 16.3164 3.2801 16.3789 3.30367 16.4372C3.32725 16.4956 3.36234 16.5486 3.40685 16.5931C3.45136 16.6377 3.50438 16.6728 3.56275 16.6963C3.62112 16.7199 3.68364 16.7315 3.74658 16.7304C3.80952 16.7293 3.87159 16.7155 3.92909 16.6899C3.98659 16.6642 4.03834 16.6273 4.08125 16.5813L5.33125 15.3313C5.3773 15.2883 5.41424 15.2366 5.43986 15.1791C5.46548 15.1216 5.47926 15.0595 5.48037 14.9966C5.48148 14.9336 5.4699 14.8711 5.44633 14.8128C5.42275 14.7544 5.38766 14.7014 5.34315 14.6569C5.29864 14.6123 5.24562 14.5772 5.18725 14.5537C5.12888 14.5301 5.06636 14.5185 5.00342 14.5196C4.94048 14.5207 4.87841 14.5345 4.82091 14.5601C4.76341 14.5858 4.71166 14.6227 4.66875 14.6687ZM15 5.46875C15.1243 5.46864 15.2434 5.41918 15.3313 5.33125L16.5813 4.08125C16.6641 3.99239 16.7091 3.87486 16.707 3.75342C16.7048 3.63199 16.6556 3.51612 16.5698 3.43024C16.4839 3.34435 16.368 3.29516 16.2466 3.29302C16.1251 3.29087 16.0076 3.33595 15.9187 3.41875L14.6687 4.66875C14.6033 4.7343 14.5587 4.81779 14.5406 4.90866C14.5226 4.99954 14.5319 5.09373 14.5673 5.17933C14.6028 5.26493 14.6628 5.33811 14.7398 5.38962C14.8168 5.44113 14.9073 5.46867 15 5.46875ZM15.3313 14.6687C15.2424 14.5859 15.1249 14.5409 15.0034 14.543C14.882 14.5452 14.7661 14.5944 14.6802 14.6802C14.5944 14.7661 14.5452 14.882 14.543 15.0034C14.5409 15.1249 14.5859 15.2424 14.6687 15.3313L15.9187 16.5813C16.0076 16.6641 16.1251 16.7091 16.2466 16.707C16.368 16.7048 16.4839 16.6556 16.5698 16.5698C16.6556 16.4839 16.7048 16.368 16.707 16.2466C16.7091 16.1251 16.6641 16.0076 16.5813 15.9187L15.3313 14.6687ZM3.59375 10C3.59375 9.87568 3.54436 9.75645 3.45646 9.66854C3.36855 9.58064 3.24932 9.53125 3.125 9.53125H1.25C1.12568 9.53125 1.00645 9.58064 0.918544 9.66854C0.830636 9.75645 0.78125 9.87568 0.78125 10C0.78125 10.1243 0.830636 10.2435 0.918544 10.3315C1.00645 10.4194 1.12568 10.4688 1.25 10.4688H3.125C3.24932 10.4688 3.36855 10.4194 3.45646 10.3315C3.54436 10.2435 3.59375 10.1243 3.59375 10ZM10 16.4062C9.87568 16.4062 9.75645 16.4556 9.66854 16.5435C9.58064 16.6315 9.53125 16.7507 9.53125 16.875V18.75C9.53125 18.8743 9.58064 18.9935 9.66854 19.0815C9.75645 19.1694 9.87568 19.2188 10 19.2188C10.1243 19.2188 10.2435 19.1694 10.3315 19.0815C10.4194 18.9935 10.4688 18.8743 10.4688 18.75V16.875C10.4688 16.7507 10.4194 16.6315 10.3315 16.5435C10.2435 16.4556 10.1243 16.4062 10 16.4062ZM18.75 9.53125H16.875C16.7507 9.53125 16.6315 9.58064 16.5435 9.66854C16.4556 9.75645 16.4062 9.87568 16.4062 10C16.4062 10.1243 16.4556 10.2435 16.5435 10.3315C16.6315 10.4194 16.7507 10.4688 16.875 10.4688H18.75C18.8743 10.4688 18.9935 10.4194 19.0815 10.3315C19.1694 10.2435 19.2188 10.1243 19.2188 10C19.2188 9.87568 19.1694 9.75645 19.0815 9.66854C18.9935 9.58064 18.8743 9.53125 18.75 9.53125Z" fill="#637288"/>
              </g>
              <defs>
                <clipPath id="clip0_0_234">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <svg class="dark-mode-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
              <path d="M6.01727 2.21456C5.74516 3.37662 5.70818 4.58136 5.90851 5.75791C6.10884 6.93447 6.54243 8.05909 7.18378 9.06561C7.82512 10.0721 8.66127 10.9402 9.64305 11.6189C10.6248 12.2975 11.7324 12.773 12.9006 13.0173C12.2864 13.6528 11.5507 14.1585 10.7373 14.5042C9.92389 14.85 9.0493 15.0288 8.16545 15.0301C8.08352 15.0301 8.00039 15.033 7.91727 15.0301C6.37849 14.9759 4.90732 14.3843 3.75935 13.3582C2.61138 12.332 1.85915 10.9362 1.63334 9.41311C1.40753 7.89003 1.72242 6.33596 2.52329 5.02091C3.32416 3.70585 4.56041 2.7129 6.01727 2.21456ZM6.89424 0.78125C6.85939 0.781368 6.82462 0.784546 6.79033 0.79075C4.9002 1.12712 3.20132 2.15084 2.02079 3.66481C0.840265 5.17878 0.261553 7.07596 0.396077 8.99107C0.530602 10.9062 1.36885 12.7038 2.74944 14.0379C4.13002 15.372 5.95533 16.1481 7.87392 16.217C7.9713 16.2205 8.06867 16.217 8.16486 16.217C9.41111 16.2178 10.6392 15.9185 11.7454 15.3444C12.8515 14.7703 13.8031 13.9383 14.5198 12.9187C14.5778 12.8308 14.6117 12.7292 14.618 12.6241C14.6243 12.5189 14.6029 12.414 14.5557 12.3198C14.5086 12.2256 14.4375 12.1455 14.3496 12.0875C14.2616 12.0295 14.16 11.9957 14.0549 11.9895C12.8687 11.8854 11.7224 11.5099 10.7044 10.8921C9.68653 10.2743 8.8243 9.43077 8.1844 8.42661C7.5445 7.42245 7.14406 6.2846 7.01404 5.101C6.88402 3.9174 7.02789 2.71975 7.43455 1.60063C7.46914 1.51105 7.48183 1.4145 7.47156 1.31902C7.46128 1.22355 7.42834 1.13191 7.37548 1.05174C7.32261 0.971578 7.25136 0.905204 7.16765 0.858153C7.08394 0.811102 6.9902 0.784736 6.89424 0.78125Z" fill="#C3C7C8"/>
            </svg>
            <span class="dark-mode-span">Switch to dark mode</span>
        </div>
    `;

    if ($('.Header-bottom2eLKOFXMEmh5 .rm-Container .Header-searchtb6Foi0-D9Vx .dark-mode').length === 0)
        $('.Header-bottom2eLKOFXMEmh5 .rm-Container .Header-searchtb6Foi0-D9Vx').prepend(darkMode);

    $('.dark-mode').off('click').on('click', () => {
        if ($('.dark-mode-btn')[0].checked) {
            localStorage.removeItem('dark-mode');
            setLightMode();
        } else {
            localStorage.setItem('dark-mode', 'true');
            setDarkMode();
        }
    });

    if (!!localStorage.getItem('dark-mode')) setDarkMode();
    else setLightMode();
});
// Dark mode - END

// Dark mode - START
// $(window).on('pageLoad', () => {
//     const darkMode = `
//         <div class="dark-mode">
//             <input class="dark-mode-btn" type="checkbox" id="toggle-mode"/>
//             <label class="dark-mode-label" for="toggle-mode"></label>
//             <span class="dark-mode-span">Dark mode</span>
//         </div>
//     `;
//
//     $('.ThemeToggle-wrapper1M_iJESXCpGR').hide();
//
//     if ($('.Header-bottom2eLKOFXMEmh5 .rm-Container .Header-searchtb6Foi0-D9Vx .dark-mode').length === 0)
//         $('.Header-bottom2eLKOFXMEmh5 .rm-Container .Header-searchtb6Foi0-D9Vx').prepend(darkMode);
//
//     const setDarkMode = () => {
//         console.log('dark mode set');
//         $('.dark-mode-btn').prop('checked', true);
//         $('.footer .footer-main .logo-footer .logo-footer-white').addClass('d-none');
//         $('.footer .footer-main .logo-footer .logo-footer-dark').removeClass('d-none');
//     }
//     const setWhiteMode = () => {
//         console.log('light mode set');
//         $('.dark-mode-btn').prop('checked', false);
//         $('.footer .footer-main .logo-footer .logo-footer-white').removeClass('d-none');
//         $('.footer .footer-main .logo-footer .logo-footer-dark').addClass('d-none');
//     }
//
//     $('.dark-mode').off('click').on('click', e => {
//         if (e.target.tagName.toUpperCase() === "LABEL") return;
//
//         $('.ThemeToggle-wrapper1M_iJESXCpGR button').click();
//         $('html').data('color-mode') === 'dark' ? $('html').data('color-mode', 'light') : $('html').data('color-mode', 'dark');
//         $('html').data('color-mode') === 'light' ? setWhiteMode() : setDarkMode();
//     });
//
//     $('html').data('color-mode') === 'light' ? setWhiteMode() : setDarkMode();
// });
// Dark mode - END

// ChatBot - START
//insentLoadLazy = true; //optional parameter to hide widget until setVisitor is called.
//ziChatLanguage = ‘zh’ // optional parameter to change language to chinese
insentCompanyDomain = `bloomreach.com`;
insentProjectName = `bloomreach`;
insentProjectKey = `XUAml2pQuQNrOPe94Vhd`;
var t = window.insent || {};
t.queue = [];
(t.SCRIPT_VERSION = `0.1.3`),
    (t.methods = [`widget`, `listener`, `setVisitor`]),
    (t.factory = function (e) {
        return function () {
            var n = Array.prototype.slice.call(arguments);
            return n.unshift(e), t.queue.push(n), t;
        };
    }),
    t.methods.forEach(function (e) {
        t[e] = t.factory(e);
    });
insent = t;
var s = document.createElement(`script`);
(s.type = `text/javascript`), (s.charset = `utf-8`), (s.defer = !0),
    (s.src = `https://bloomreach.widget.insent.ai/insent`),
    document.readyState === `complete` ? document.body.appendChild(s) : window.addEventListener(`load`, function (n) {
        document.body.appendChild(s);
    });
// ChatBot - END

// Set filters for search depends on product - START
// This code can be added to the global javascript file in the Bloomreach documentation
// $(() => {
//     const products = ['Engagement', 'Discovery', 'Content', 'Sandbox Project'];
//
//     $('.rm-SearchToggle').one("click", () => {
//         setTimeout(() => {
//             products.map(product => {
//                 if (window.location.href.includes(product.toLowerCase().trim().split(/\s+/)[0])) {
//                     $(`.Toggle-label[title='${product}']`).click();
//                 }
//             });
//             $('.SearchBox-InputUQZAW9QXMe-c').click();
//         },1000);
//     });
// });
// Set filters for search depends on product - END

// Opening external links in new tab - START
// $(window).on('pageLoad', () => {
//     setTimeout(() => {
//         $('a[href^="http://"], a[href^="https://"]')
//             .not('a[href*="god.gw.postman.com"]')
//             .not(`a[href*="${location.hostname}"]`)
//             .attr('target', '_blank');
//     }, 500);
// });
// Opening external links in new tab - END

// Sections scrolling - START
$(window).on('pageLoad', () => {
    $('a[href*="#"]').off('click').on('click', function (e) {
        const url = $(this).attr('href').split('#');
        const path = url[0];
        const hash = url[1];

        if (window.location.href.split('#')[0] === path || window.location.pathname === path || path === '') {
            e.preventDefault();
            $(this).blur();

            const heading = $(`.heading.header-scroll .heading-anchor#${hash}`).parent();
            $([document.documentElement, document.body]).animate({
                scrollTop: heading.offset().top - 150
            }, 300);
            window.location.hash = hash;
        } else removeFeedbackFromTOC();
    });

    const urlHash = window.location.hash;

    if (urlHash.length > 0) {
        setTimeout(() => {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(`.heading.header-scroll .heading-anchor${urlHash}`).parent().offset().top - 150
            }, 300);
        }, 800);
    }
});
// Sections scrolling - END

// Moving feedback under TOC - START
const removeFeedbackFromTOC = () => {
    if ($('.main-article-wrapper .content-toc.grid-25 .PageThumbs').length > 0) {
        $('#content-container .content-body').append($('.main-article-wrapper .content-toc.grid-25 .PageThumbs'));
    }
}

$(window).on('pageLoad', () => {
    if (window.innerWidth > 1112) {
        $('a[target="_self"]:not(.active)').not('.heading-anchor-icon').not('a[href*="#"]').off('click').on('click', () => {
            removeFeedbackFromTOC();
        });

        if ($('#content-container .content-toc.grid-25').length > 0) {
            if (!$('.main-article-wrapper').length > 0) {
                const newArticleWrapper = $('<div class="d-flex w-100 main-article-wrapper"></div>');

                $('main .rm-Container.rm-Container_flex').append(newArticleWrapper);

                const mainArticleEl = $('article.rm-Article');
                newArticleWrapper.append(mainArticleEl);
            }

            setTimeout(() => {
                const tableOfContents = $('#content-container .content-toc.grid-25');

                if (tableOfContents.length > 0) {
                    if ($('.main-article-wrapper .content-toc.grid-25').length > 0) {
                        $('.main-article-wrapper .content-toc.grid-25').remove();
                    }

                    $('.main-article-wrapper').append(tableOfContents);
                }

                const feedback = $('#content-container .content-body .PageThumbs');

                if (feedback.length > 0) {
                    $('.main-article-wrapper .content-toc.grid-25').append(feedback);
                }

                if ($('#content-container .content-toc.grid-25').length > 0) {
                    $('#content-container .content-toc.grid-25').remove();
                }
            }, 1);
        }
    }
});

$(window).on('popstate', (e) => {
    if (window.location.pathname !== e.target.insentPageUrl) removeFeedbackFromTOC();
});
// Moving feedback under TOC - END

// Button under TOC - START
$(window).on('pageLoad', () => {
    const btn = $('.content-body .rdmd-html .toc-btn');

    if (btn.length > 0 && $('#content-container .content-toc .toc-btn').length === 0) $('#content-container .content-toc').append(btn);
    else $('#content-container .content-toc .toc-btn').remove();
});
// Button under TOC - END

// Current year in footer - START
$(() => {
    const currYear = new Date().getFullYear();
    const replacedStr = $('.reserved-rights').text().replace('2021', currYear);
    $('.reserved-rights').text(replacedStr);
});
// Current year in footer - END

// var hrefValue = "https://documentation.bloomreach.com/sandbox/docs/out-of-memory";
//
// var element = document.querySelector('a[href="' + hrefValue + '"]');
//
// element.style.pointerEvents = 'none';

// Mobile menu changes - START
window.isPageLoad = false;
$(window).on('pageLoad', () => {
    if (window.innerWidth < 769) {
        if ($('.mobile-select-wrapper').length < 1 && !window.location.pathname.includes('/recipes')) {
            const wrapper = `<div class="mobile-select-wrapper"></div>`;
            setTimeout(() => {
                $('.MobileSubnav1DsTfasXloM2').before(wrapper);
                $('.mobile-select-wrapper').append($('.MobileSubnav1DsTfasXloM2'));
            }, 200);
        }

        $('.NavItem-item_mobile1qG3gd-Mkck-:not(.active)').off('click').on('click', function () {
            if (!window.location.href.endsWith($(this).attr('href'))) {
                $('.rm-Header-bottom').append($('.MobileSubnav1DsTfasXloM2'));
                $('.mobile-select-wrapper').remove();
            }
        });
    }

    if (!window.isPageLoad) {
        const hpLogo = `<a href="https://documentation.bloomreach.com/"><img src="https://br-cms.bloomreach.com/site/binaries/content/gallery/newbloomreach/img/br-logo-small.png" class="header-mobile-img" alt="br logo"></a>`;
        $('.Header-left_mobile1RG-X93lx6PF').prepend(hpLogo);
        $('.MobileFlyout1hHJpUd-nYkd').prepend($('.MobileFlyout-logo3Lq1eTlk1K76'));

        const productStr = window.location.pathname.split('/')[1].charAt(0).toUpperCase() + window.location.pathname.split('/')[1].slice(1);
        const productEl = `<span class="mobile-menu-product">${productStr}</span>`;
        $('.menu3d6DYNDa3tk5').append(productEl);
        $('.Header-left-nav2xWPWMNHOGf_').hide();



        // $('.MobileSubnav1DsTfasXloM2').addClass('icon-menu');
        // const products = `<div class="mobile-products-dropdown">
        //     <div>${product}<span class="icon-chevron"></span></div>
        //     <ul class="dropdown-products">
        //         <li><a href="/engagement">Engagement</a></li>
        //         <li><a href="/content">Content</a></li>
        //         <li><a href="/discovery">Discovery</a></li>
        //     </ul>
        // </div>`;
        // $('.Header-left-nav2xWPWMNHOGf_').hide().after(products);
        // $('.mobile-products-dropdown').off('click').on('click', function () {
        //     $(this).find('.icon-chevron').toggleClass('dropdown-img-show');
        //     $(this).find('.dropdown-products').slideToggle(300);
        // });

        $('.MobileFlyout1hHJpUd-nYkd a').each(function () {
            $(this).text() === 'Home' && $(this).hasClass('NavItem_dropdown-muted1xJVuczwGc74') && $(this).remove();
            $(this).text() === 'Engagement' && $('.MobileFlyout-logo3Lq1eTlk1K76').after($(this));
            $(this).text() === 'Content' && $('.MobileFlyout1hHJpUd-nYkd .NavItem-item1gDDTqaXGhm1:nth-child(2)').after($(this));
            $(this).text() === 'Discovery' && $('.MobileFlyout1hHJpUd-nYkd .NavItem-item1gDDTqaXGhm1:nth-child(3)').after($(this));

            // $(this).text().includes('Other Resources') && console.log($(this))
        });
        $('.MobileFlyout1hHJpUd-nYkd .NavItem-item1gDDTqaXGhm1:nth-child(4)').after($('.MobileFlyout1hHJpUd-nYkd .MobileFlyout-divider10xf7R2X1MeW'));

        window.isPageLoad = true;
    }
});
// Mobile menu changes - END

// Owlbot customization - START
$(window).on('load', () => {
    const label = $('.rm-OwlbotAI');
    label.append(`<span id="owlbot-search-span"></span>`);
    const input = label.find('input');
    const span = label.find('#owlbot-search-span');

    input.off('input').on('input', function (e) {
        span.text(this.value);
        $(this).css('width', span.width() + 'px');
        label.css('width', span.width() + 50 + 'px');
    });

    input.off('focusout').on('focusout', function () {
        setTimeout(() => {
            if (this.value === '') {
                span.text('');
                $(this).css('width', 'auto');
                label.css('width', 'var(--Owlbot-width)');
            }
        }, 10);
    });
});
// Owlbot customization - END












// Sandbox Home page - START
if (window.location.pathname === '/page/home-page') {
    $(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.0/owl.carousel.min.js';
        script.integrity = 'sha512-yG5avRhg8AWY1BsP/N//3vL3l74jbsQHivqAXOx7KB3agFQzFbeubQr9zYBinQ8+Iwsebv2s2+muvA9fMw/Ebg==';
        script.crossOrigin = 'anonymous';
        script.referrerpolicy = 'no-referrer';

        document.body.appendChild(script);

        console.log('Sandbox Home page - START');

        // setTimeout(() => {
        //     $('.explore-docs-container .br-cards').owlCarousel({
        //         margin: 0,
        //         nav: true,
        //         dots: true,
        //         navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
        //         responsive: {
        //             0: {
        //                 items: 1,
        //                 nav: false,
        //             },
        //             800: {
        //                 items: 2,
        //                 nav: false,
        //             },
        //             1030: {
        //                 items: 3,
        //                 nav: false,
        //             },
        //             1200: {
        //                 items: 3,
        //                 nav: false,
        //                 mouseDrag: false,
        //                 touchDrag: false
        //             },
        //         }
        //     });
        //     console.log('carousel init');
        // }, 2000);

        $('#content-container').css({maxWidth: 'unset', margin: '0'});
        $('#content-head').css('display', 'none');
        $('.progress-bar').css('opacity', '0');
        $('footer:not(.footer)').css('display', 'none');

        $('.navbar-toggler-icon').click(function () {
            $('#menuToggle, .menu-overlay').addClass("show");
            $('body').addClass("overflow-hidden");
        });
        $('.hide-nav').click(function () {
            $('#menuToggle, .menu-overlay').removeClass("show");
            $('body').removeClass("overflow-hidden");
        });
        $(".menu-item-wrapper .title").click(function () {
            if (!$(this).closest('.menu-item-wrapper').find('.list-unstyled:visible').length) {
                $('.menu-item-wrapper').removeClass("show")
                $(this).closest('.menu-item-wrapper').addClass('show');
            } else {
                $(this).closest('.menu-item-wrapper').toggleClass("show");
            }
            $('.menu-item-wrapper').find('.list-unstyled').stop().slideUp();
            $(this).closest('.menu-item-wrapper').find('.list-unstyled').stop().slideToggle();
        });

        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if (scroll > 100) $('.navbar').addClass('navbar-shadow');
            else $('.navbar').removeClass('navbar-shadow');
        });

        let search = $('#enterprise #hub-subheader-parent .ng-scope').detach();
        $("#explore-docs .search").prepend(search);

        $('.nav-item-dropdown').click(function (e) {
            e.stopPropagation(); 

            $('.dropdown-menu-link-show').not($(this).find('.dropdown-menu-link')).removeClass('dropdown-menu-link-show');
            $('.dropdown-img-show').not($(this).find('.dropdown-img')).removeClass('dropdown-img-show');
        
            $(this).find('.dropdown-menu-link').toggleClass('dropdown-menu-link-show');
            $(this).find('.dropdown-img').toggleClass('dropdown-img-show');
        });

        const currYear = new Date().getFullYear();
        const replacedStr = $('.reserved-rights').text().replace('2021', currYear);
        $('.reserved-rights').text(replacedStr);
    });

    $(window).on('load', () => {
        if (window.innerWidth < 992) {
            $('nav.navbar .navbar-toggler').removeClass('order-last').after($('.rm-Header .Header-search_featherYsmQBn55F3d9'));
        }

        $('.search').append($('.Dropdown'));
        $('.explore-docs-container').append($('.dark-mode'));
    });
}
// Sandbox Home page - END




























/* 🔎 REPLACING ALGOLIA SEARCH BAR */

const debuggingMode = false;
const searchDebouncingTime = 400; // In milliseconds
const useAutocompletionFeature = true;
if (debuggingMode) console.log('✨ REPLACING ALGOLIA SEARCH BAR ✨');



$(window).on('load', async function () {

    /* G U I   I N I T I A L I Z A T I O N */

    let $originalBarMobile;
    let $originalBarDesktop;
    let $clonedBarMobile;
    let $clonedBarDesktop;

    setTimeout(() => {

     // 👉 SPECIAL CASE: SANDBOX HOME PAGE
     if (window.location.pathname === '/page/home-page') {
             // if owlbot is on remove owl search bars and store the original to use later in modal with original event listeners
        
                if (!window.location.href.includes('?owlbotTrial=true')) {
                    $originalBarMobile = $(".rm-Header-Top .rm-Container .Dropdown.Dropdown_closed");
                    $originalBarDesktop = $(".rm-Header-bottom .rm-Container .rm-SearchToggle");
                    // console.log('owl test');
                    // console.log($('.rm-OwlbotAI'));
                    // console.log('owl founding');
                    $clonedBarMobileSearch = $originalBarMobile.clone();
                    $headerSearch = $('.search');
                    // console.log($headerSearch);
                    $originalBarMobile.remove();
                    $headerSearch.append($clonedBarMobileSearch);
    
                    $clonedBarDesktopSearch = $originalBarDesktop.clone();
                    $originalBarDesktop.remove();
                    $headerSearch.append($clonedBarDesktopSearch);
    
                    $clonedBarMobile = $(".rm-Header-Top .rm-Container .Dropdown.Dropdown_closed");
                    $clonedBarDesktop = $('.search .rm-SearchToggle');
                    // console.log($('.search .rm-OwlbotAI').parent());
                    // console.log('cloned');
                    console.log($clonedBarDesktopSearch);
                    console.log($clonedBarDesktop);
    
                    // Clone Algolia search bars to remove their original event listeners
                } else {
                    $originalBarMobile = $(".rm-Header-top .rm-Container .rm-SearchToggle");
                    $originalBarDesktop = $(".rm-Header-bottom .rm-Container .rm-SearchToggle");
                    // console.log('not owl');
                    $originalBarMobile.replaceWith($originalBarMobile.clone());
    
                    $originalBarDesktop.replaceWith($originalBarDesktop.clone());
    
                    $clonedBarMobile = $(".rm-Header-top .rm-Container .rm-SearchToggle");
                    $clonedBarDesktop = $(".rm-Header-bottom .rm-Container .rm-SearchToggle");
                }
   
     } else {


    // if owlbot is on remove owl search bars and store the original to use later in modal with original event listeners
    if (window.location.href.includes('?owlbotTrial=true')) {
        $originalBarMobile = $(".rm-Header-Top .rm-Container .Dropdown.Dropdown_closed");
        $originalBarDesktop = $(".rm-Header-bottom .rm-Container .Dropdown.Dropdown_closed");
        console.log('owl');
        $clonedBarMobileSearch = $originalBarMobile.clone();
        $headerSearch = $('.Header-searchtb6Foi0-D9Vx');
        $originalBarMobile.remove();
        $headerSearch.append($clonedBarMobileSearch);

        $clonedBarDesktopSearch = $originalBarDesktop.clone();
        $originalBarDesktop.remove();
        $headerSearch.append($clonedBarDesktopSearch);

        $clonedBarMobile = $(".rm-Header-Top .rm-Container .Dropdown.Dropdown_closed");
        $clonedBarDesktop = $(".rm-Header-bottom .rm-Container .Dropdown.Dropdown_closed");


        // Clone Algolia search bars to remove their original event listeners
    } else {
        $originalBarMobile = $(".rm-Header-top .rm-Container .rm-SearchToggle");
        $originalBarDesktop = $(".rm-Header-bottom .rm-Container .rm-SearchToggle");
        console.log('not owl testink');
        $originalBarMobile.replaceWith($originalBarMobile.clone());

        $originalBarDesktop.replaceWith($originalBarDesktop.clone());

        $clonedBarMobile = $(".rm-Header-top .rm-Container .rm-SearchToggle");
        $clonedBarDesktop = $(".rm-Header-bottom .rm-Container .rm-SearchToggle");
    }
        
     }

    


    if (debuggingMode) $clonedBarMobile.addClass('bg-warning');

    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(window.navigator.userAgent.toLowerCase());
    $clonedBarDesktop.find(".rm-SearchToggle-shortcut").text(isMac ? '⌘-K' : 'Ctrl-K');
    if (debuggingMode) $clonedBarDesktop.addClass('bg-warning');

    // pointer events for search are turned of until search is completely loaded
    if ($('.rm-Container .Header-searchtb6Foi0-D9Vx > .Dropdown.Dropdown_closed')[0]) {
        $('.rm-Container .Header-searchtb6Foi0-D9Vx > .Dropdown.Dropdown_closed')[0].style.pointerEvents = 'all';
    }


    // Replace Algolia search modal
    $searchModalContainer = $("#hub-search-results");
    $searchModalContainer.find(".hub-container").remove();
    $searchModalContainer.append(renderSearchModal());
    $(".SearchResults").replaceWith(renderStartTyping());

    // Opening & closing search modal
    $clonedBarMobile.on('click', toggleSearchModal);
    $clonedBarDesktop.on('click', toggleSearchModal);
    let mouseDownTarget = null;
    $(".modal-backdrop").on('mousedown', (e) => mouseDownTarget = e.target);
    $(".modal-backdrop").on('mouseup', (e) => {
        handleAutocompleteClickEvent(e);
        if (e.target === mouseDownTarget && mouseDownTarget === e.currentTarget) toggleSearchModal();
        mouseDownTarget = null;
    });
    $(document).off('keydown').on('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.which === 75) { // Handle Ctrl / ⌘ + K shortcuts
            e.preventDefault(); e.stopPropagation(); toggleSearchModal();
        }
        if (e.key === 'Escape') { // Close modal with Escape key
            e.stopPropagation(); toggleSearchModal();
        }
    });

    // Append Owlbot search inside modal when AI Mode is on
    $searchModalAIToggle = $('#toggle-AI-mode');

    $searchModalAIToggle.on('change', (e) => {
        if (e.target.checked) {
            $searchModalAISearchCol = $('.AISearch-Col');

            $searchModalAISearchCol.prepend($originalBarMobile);
            $searchModalAISearchCol.prepend($originalBarDesktop);

            $('.CustomSearch-Col')[0].style.display = "none";
            $('.RefinementList-Col')[0].style.display = "none";
            $('.CustomSearch-Discovery')[0].style.display = "none";
            $searchModalAISearchCol[0].style.display = "flex";

            $('.AISearch-Col .SearchBert1u4IeBwd-ET6 input')[0].placeholder = "Ask a question";

            adjustOwlDropdown();

        } else {
            $('.CustomSearch-Col')[0].style.display = "flex";
            $('.RefinementList-Col')[0].style.display = "flex";
            $('.CustomSearch-Discovery')[0].style.display = "flex";
            $searchModalAISearchCol[0].style.display = "none";
        }
    });

    //adjustOwlbot dropdown inside modal when dropdown is open
    function adjustOwlDropdown() {
        const label = $('.rm-OwlbotAI');
        const input = label.find('input');

        input.off('click').on('click', function(){

            $('.AISearch-Col > .SearchBox')[0].style.display = "none";
            adjustOwlDropdownPosition();
            window.addEventListener('resize',  adjustOwlDropdownPosition);
        });
    }

    function adjustOwlDropdownPosition (){
        $searchInput = $('.AISearch-Col .rm-OwlbotAI')[0];

        const searchWidth = $searchInput.getBoundingClientRect().width;

        $owlDropdown = $('#tippy-1');

        if($owlDropdown[0]) {
            $owlDropdown[0].style.width = searchWidth + "px";
        }
    }

    function toggleSearchModal() {
        console.log('click');
        if ($(".hub-search-results-active").length > 0) closeSearchModal();
        else openSearchModal();
    }
    function openSearchModal() {
        console.log("open");
        $("body").css("overflow", "hidden");
        $("#hub-search-results").addClass("hub-search-results-active");
        $(".SearchBox-Input").focus();

        // do not display AI toggle when owlbot is not on
        if (!window.location.href.includes('?owlbotTrial=true')) {
            $('.AI-mode')[0].style.display = "none";
        }
    }
    function closeSearchModal() {
        console.log("close");
        $("#hub-search-results").removeClass("hub-search-results-active");
        $("body").css("overflow", "");
        hideAutocompletions();
    }

    // Selecting autocomplete suggestions
    function handleAutocompleteClickEvent(e) {
        const $clickedElement = $(e.target);

        // Unhide autocomplete suggestions when clicked in input field
        if ($clickedElement.closest('.SearchBox-Input')?.length) {
            unhideAutocompletions();
            return;
        }

        // Handle click on autocomplete item
        const $searchAutocompletions = $clickedElement.closest('.SearchAutocompletions');

        if ($searchAutocompletions?.length) {
            const $item = $clickedElement.closest('.SearchAutocompletions-Item');
            if ($item.length) {
                const clickedItem = $item.text();
                selectAutocompletionSuggestion(clickedItem);
            }

            // Hide autocomplete suggestions when clicked outside the dropdown
        } else { hideAutocompletions(); }
    }

    // Handle keyboard input
    $('.CustomSearch-Col').off('keydown').on('keydown', e => {
        if (!$("#hub-search-results").hasClass("hub-search-results-active")) return;
        if (![40, 38, 13].includes(e.keyCode)) return;

        if ($(".SearchBox-Input").is(":focus") && e.keyCode === 13) {
            getSearchResults();
            hideAutocompletions();
            return;
        }

        let listToHandle;
        if ($(".SearchAutocompletions-list").is(':visible') && $(".SearchAutocompletions-Item")?.length > 0) listToHandle = ".SearchAutocompletions-Item";
        else if ($(".SearchResults-Result")?.length > 0) listToHandle = ".SearchResults-Result";
        else return;

        const currentlyFocused = $(`${listToHandle}:focus`);
        if (e.keyCode === 40) { // Down key
            if (currentlyFocused.length > 0) $(`${listToHandle}:focus`).next().focus();
            else $(listToHandle)[0].focus();
            e.preventDefault();

        } else if (e.keyCode === 38) { // Up key
            if (currentlyFocused.length > 0) $(`${listToHandle}:focus`).prev().focus();
            else $(listToHandle)[0].focus();
            e.preventDefault();

        } else if (e.keyCode === 13 && listToHandle === ".SearchAutocompletions-Item") { // Enter
            if (currentlyFocused.length > 0) {
                const focusedItem = $(`${listToHandle}:focus`).text();
                selectAutocompletionSuggestion(focusedItem);
            }
        }
    });

    // Select autocompletion suggestion
    function selectAutocompletionSuggestion(autocompletion) {
        $('.SearchBox-Input').val(capitalizeEveryWord(autocompletion));
        getSearchResults();
        clearAutocompletions();
    }



    /* S E A R C H   F U N C T I O N A L I T Y */

    let ajaxSearchRequest = null;
    let ajaxAutocompleteRequest = null;
    let numberOfResults = 0;
    let resultsPerPage = 15;
    let currentPage = 1;
    let filtersActive = [];
    const searchTabs = ['All', 'Guides', 'Recipes', 'Reference'];
    let currentSearchTab = 'All';
    $(".SearchBox-Input").on('input', () => {
        if (useAutocompletionFeature) debounce(getSearchAutocompletions, 1, searchDebouncingTime);
        else debounce(getSearchResults, 1, searchDebouncingTime);
    });

    // Brand filtering (Content, Discovery, Engagement)
    $("input[type='checkbox'].Toggle-input").change(function() {
        const selectedFilter = this.getAttribute('label').toLowerCase();
        if (this.checked) filtersActive.push(selectedFilter);
        else filtersActive = filtersActive.filter(i => i !== selectedFilter);
        getSearchResults();
    });

    // Search tabs (All, Guides, Recpies, API Reference)
    $(".Tabs-listItem").on('click', function() {
        currentSearchTab = this.getAttribute('aria-label');
        searchTabs.forEach(tab => {
            if (tab === currentSearchTab) $(`.Tabs-listItem[aria-label='${tab}']`).addClass('Tabs-listItem_active');
            else $(`.Tabs-listItem[aria-label='${tab}']`).removeClass('Tabs-listItem_active');
        });
        getSearchResults();
    });

    // ➡️ Search suggestions ➡️
    function getSearchAutocompletions() {
        console.log('Hello from autocompletions');
        const searchQuery = $(".SearchBox-Input").val()?.trim();
        if (!searchQuery) { clearAutocompletions(); return; }
        if (debuggingMode) console.info(`🔎 Fetching autocompletions for '${searchQuery}'`);
        startSearchSpinner();


        if (debuggingMode) console.time('⏱️ API request: ');
        ajaxAutocompleteRequest = $.ajax({
            method: 'GET',
            data: {
                account_id: '6276',
                auth_key: 'v9hvg9giav60ubtd',
                catalog_views: 'bloomreach_devdocs',
                request_id: '1531227708922',
                _br_uid_2: 'uid%3D325153054784%3Av%3D15.0%3Ats%3D1664270934702%3Ahc%3D219',
                url: 'www.bloomique.com',
                ref_url: 'www.bloomique.com',
                q: searchQuery,
                request_type: 'suggest',
            },
            url: `https://staging-suggest.dxpapi.com/api/v2/suggest/`,

            // Abort previous search requests if there are any still in progress
            beforeSend: () => { if (ajaxAutocompleteRequest != null) ajaxAutocompleteRequest.abort(); },

            // Process request autocompletions
            success: response => {
                if (debuggingMode) console.timeEnd('⏱️ API request: ');
                if (debuggingMode) console.time('⏱️ Request processing: ');

                const autocompletions = Array.isArray(response?.suggestionGroups)
                    ? response?.suggestionGroups[0]?.querySuggestions : undefined;

                // No results message
                if (!autocompletions?.length) {
                    clearAutocompletions();

                    // Render results
                } else {
                    rerenderAutocompletionsContainer();
                    $(".SearchBox-Input").addClass("hide-bottom-rounding");
                    autocompletions.forEach(autocompletion => {
                        const { displayText } = autocompletion;
                        $(".SearchAutocompletions-list").append(renderAutocompletionItem(displayText));
                    });
                }

                ajaxAutocompleteRequest = null;
                unhideAutocompletions();
                stopSearchSpinner();
                if (debuggingMode) console.timeEnd('⏱️ Request processing: ');
            },

            // Handle errors
            error: err => {
                if (err.statusText === "abort") {
                    if (debuggingMode) console.info("❌ Unfinished request in progress abborted");
                } else {
                    $(".SearchResults").replaceWith(renderUnexpectedError);
                    if (debuggingMode) console.error('⚠️ Unexpected error detected in ajax request');
                    if (debuggingMode) console.error(err);
                }

                ajaxAutocompleteRequest = null;
                stopSearchSpinner();
            }
        });
    }

}, 500);


    // ➡️ Fetching and processing results ➡️
    function getSearchResults(page = 1, scrollToEnd = false, query = null) {
        const searchQuery = query !== null ? query : $(".SearchBox-Input").val()?.trim();
        if (!searchQuery) { $(".SearchResults").replaceWith(renderStartTyping()); return; }
        currentPage = Math.max(page, 1);
        if (debuggingMode) console.info(`🔎 Fetching results for '${searchQuery}'` + (page > 1 ? ` | page ${page}` : ``) + (filtersActive.length > 0 ? ` | filters: ${filtersActive}` : ``));
        startSearchSpinner();
        if (useAutocompletionFeature) {
            rerenderResultsContainer();
            if (ajaxAutocompleteRequest !== null) ajaxAutocompleteRequest.abort();
            hideAutocompletions();
        }

        const filterQueryBrand = filtersActive.length
            ? 'brand:' + filtersActive.map(filter => `"${filter}"`).join(' OR ') : '""';

        let categoryActive;
        switch (currentSearchTab) {
            case 'Guides': categoryActive = 'guide'; break;
            case 'Recipes': categoryActive = 'recipe'; break;
            case 'Reference': categoryActive = 'reference'; break;
            case 'All': default: categoryActive = null; break;
        }
        const filterQueryCategory = categoryActive
            ? 'category2:' + `"${categoryActive}"` : '""';
        let 

        if (debuggingMode) console.time('⏱️ API request: ');
        ajaxSearchRequest = $.ajax({
            method: 'GET',
            data: {
                account_id: '6276',
                search_type: 'keyword',
                domain_key: 'bloomreach_devdocs',
                fl: 'pid,title,brand,price,sale_price,thumb_image,url,description,category2',
                fq: [filterQueryBrand, filterQueryCategory],
                q: searchQuery,
                request_type: 'search',
                rows: resultsPerPage,
                start: (page - 1) * resultsPerPage,
                search_td: '',
                url: 'https://documentation.bloomreach.com',
            
            },
            traditional: true, // Required for `fq: [filterQueryBrand, filterQueryCategory],` to work properly
            url: `https://staging-core.dxpapi.com/api/v1/core/`,

            // Abort previous search requests if there are any still in progress
            beforeSend: () => { if (ajaxSearchRequest != null) ajaxSearchRequest.abort() },

            // Process request results
            success: response => {
                if (debuggingMode) console.timeEnd('⏱️ API request: ');
                if (debuggingMode) console.time('⏱️ Request processing: ');
                const results = response.response.docs;

                // No results message
                if (!results.length) {
                    $(".SearchResults").replaceWith(renderNoResults(searchQuery));

                    // Render results
                } else {
                    numberOfResults = response.response.numFound;
                    rerenderResultsContainer(currentPage, numberOfResults, resultsPerPage, getSearchResults);
                    results.forEach(result => {
                        const { url, title, brand, category2, description } = result;
                        $(".SearchResults-list").append(renderResultItem({ url, title, brand, category2, description, searchQuery }));
                    });
                    if (scrollToEnd) $('.SearchResults').scrollTop($('.SearchResults')[0].scrollHeight);
                }

                ajaxSearchRequest = null;
                stopSearchSpinner();
                if (useAutocompletionFeature) {
                    if (ajaxAutocompleteRequest !== null) ajaxAutocompleteRequest.abort();
                    hideAutocompletions();
                }
                if (debuggingMode) console.timeEnd('⏱️ Request processing: ');
            },

            // Handle errors
            error: err => {
                if (err.statusText === "abort") {
                    if (debuggingMode) console.info("❌ Unfinished request in progress abborted");
                } else {
                    $(".SearchResults").replaceWith(renderUnexpectedError);
                    if (debuggingMode) console.error('⚠️ Unexpected error detected in ajax request');
                    if (debuggingMode) console.error(err);
                }

                ajaxSearchRequest = null;
                stopSearchSpinner();
            }
        });
    }
});



/* S E A R C H   C O M P O N E N T S */

function startSearchSpinner() {
    $(".SearchBox-Input").addClass("SearchBox-Input_loading");
    $(".SearchBox").append(`<i class="SearchBox-Spinner"></i>`);
}
function stopSearchSpinner() {
    $(".SearchBox-Input").removeClass("SearchBox-Input_loading");
    $(".SearchBox-Spinner").remove();
}

function renderNoResults(searchQuery) {
    return `
    <div class="SearchResults SearchResults_empty">
      <h6 level="6" text="Title" class="Title  Title6 ">Try a different search.</h6>
      <div>No results for ‘${searchQuery}’.</div>
    </div>
  `
}
function renderUnexpectedError() {
    return `
    <div class="SearchResults SearchResults_empty">
      <h6 level="6" text="Title" class="Title  Title6 ">Whoops, something went wrong.</h6>
      <div>Please try again later.</div>
    </div>
  `
}

function renderStartTyping() {
    return `
    <div class="SearchResults SearchResults_empty">
      <i class="icon icon-search"></i>
      <h6 level="6" text="Title" class="Title  Title6 ">${useAutocompletionFeature
        ? 'Type your query, and press Enter or select a suggestion to search.'
        : 'Start typing to search…'
    }</h6>
    </div>
  `
}

function rerenderAutocompletionsContainer() {
    $(".SearchAutocompletions").replaceWith(`
    <div class="SearchAutocompletions">
      <div class="SearchAutocompletions-list"></div>
    </div>
  `);
}

function renderAutocompletionItem(displayText) {

    $(".SearchBox-Input").addClass("hide-bottom-rounding");

    // Highlight matches
    const searchQuery = $(".SearchBox-Input").val()?.trim();
    const keywords = searchQuery.split(' ');
    let excerpt = displayText;
    keywords.forEach(keyword => {
        const matchesFound = excerpt.matchAll(new RegExp(keyword, 'gi'));
        const indexesFound = [...matchesFound].map(a => a.index).reverse();
        const length = keyword.length;

        indexesFound.forEach(position => {
            excerpt = excerpt.substring(0, position)
                + '<span class="highlighted">' + excerpt.substring(position, position + length) + '</span>'
                + excerpt.substring(position + length);
        });
    });

    return `
    <div class="SearchAutocompletions-Item" tabindex="0"><div>${excerpt}</div></div>
  `
}

function clearAutocompletions() {
    $(".SearchAutocompletions-list").replaceWith(`<div></div>`);
    $(".SearchBox-Input").removeClass("hide-bottom-rounding");
}

function hideAutocompletions() {
    $(".SearchAutocompletions-list:not(.hidden)").addClass('hidden');
    $(".SearchBox-Input").removeClass("hide-bottom-rounding");
}

function unhideAutocompletions() {
    $(".SearchAutocompletions-list.hidden").removeClass('hidden');
    if ($(".SearchAutocompletions-Item").length > 0) {
        $(".SearchBox-Input").addClass("hide-bottom-rounding");
    }
}

function rerenderResultsContainer(currentPage, numberOfResults, resultsPerPage, getSearchResults) {

    const pagesTotal = Math.ceil(numberOfResults / resultsPerPage);

    $(".SearchResults").replaceWith(`
    <div class="SearchResults">
      <div class="SearchResults-ScrollTo"></div>
      <div class="SearchResults-list">

      </div>
      ${pagesTotal > 1 ? '<footer class="SearchPagination">' : ''}
        ${currentPage < pagesTotal
        ? '<button id="SearchPagination-Button-Next" class="Button Button_sm Button_secondary_ghost Button_secondary SearchPagination-Button" focus-hit="firstElementChild" type="button">Next</button>'
        : ''
    }
        ${pagesTotal > 1 ? '<span class="SearchPagination-State">' + currentPage + ' of ' + pagesTotal + '</span>' : ''}
        ${currentPage > 1
        ? '<button id="SearchPagination-Button-Back" class="Button Button_sm Button_secondary_ghost Button_secondary SearchPagination-Button" focus-hit="firstElementChild" type="button">Back</button>'
        : ''
    }
      ${pagesTotal > 1 ? '</footer>' : ''}
    </div>
  `)

    $("#SearchPagination-Button-Next").on('click', () => getSearchResults(currentPage + 1, true));
    $("#SearchPagination-Button-Back").on('click', () => getSearchResults(currentPage - 1, true));
}

function renderResultItem({ url, title, brand, category2, description, searchQuery }) {

    const excerpt = generateExcerpt({ title, searchQuery, description })

    // const urlMatch = url.match(/^https?:\/\/[^\/]+([^?]*)/);
    // let pathRelative = urlMatch ? urlMatch[1] : '';

    brand = brand.charAt(0).toUpperCase() + brand.slice(1)

    let icon = 'missing'
    if (category2 === 'guide') icon = 'guides'
    else if (category2 === 'recipe') icon = 'recipes'
    else if (category2 === 'reference') icon = 'references'

    return `
    <a class="SearchResults-Result" href="${url}" data-url="${url}">
      <i class="SearchResults-Result-Icon icon-${icon}"></i>
      <div style="max-width: 660px;">
        <header class="SearchResults-Result-Header" title="${title}">
          <span class="SearchResults-Result-Title">${title}
            <span class="SearchResults-Result-Project">${brand}</span>
          </span>
        </header>
        <div class="SearchResults-Result-Excerpt" title="${title}">
          <span class="ais-Snippet">${excerpt}</span>
        </div>
      </div>
    </a>
  `
}

function renderSearchModal() {
    return `
    <div class="hub-container">
      <div class="modal-backdrop show-modal rm-SearchModal" role="button" tabindex="0">
        <div class="CustomSearch CustomSearch_withSidebar" id="AppSearch" role="tabpanel" tabindex="0">
          <div class="CustomSearch-Col">
            <div class="SearchBox">
              <input autofocus autocapitalize="off" autocomplete="off" autocorrect="off" type="search" value=""
                spellcheck="false" tabindex="0" class="Input Input_md Input_touched SearchBox-Input"
              >
              <span style="position: absolute; right: 40px; top: 9px;">Enter to search</span>
              <div class="SearchAutocompletions"></div>
            </div>
            <div class="SearchTabs">
              <div class="Tabs Tabs-list" role="tablist">
                <div aria-label="All" aria-selected="true" class="SearchTabs-Tab Tabs-listItem Tabs-listItem_active"
                  role="tab" tabindex="-1"><span class="SearchTabs-Tab"
                >
                  <i class="icon icon-search1"></i>All</span>
                </div>
                <div aria-label="Guides" aria-selected="false" class="SearchTabs-Tab Tabs-listItem " role="tab" tabindex="-1">
                  <span class="SearchTabs-Tab"><i class="icon icon-guides"></i>Guides</span>
                </div>
                <div aria-label="Recipes" aria-selected="false" class="SearchTabs-Tab Tabs-listItem " role="tab" tabindex="-1">
                  <span class="SearchTabs-Tab"><i class="icon icon-recipes"></i>Recipes</span>
                </div>
                <div aria-label="Reference" aria-selected="false" class="SearchTabs-Tab Tabs-listItem " role="tab" tabindex="-1">
                  <span class="SearchTabs-Tab"><i class="icon icon-references"></i>API Reference</span>
                </div>
              </div>
            </div>
            <div class="SearchResults"></div>
          </div>
          <div class="AISearch-Col" style="display: none">
           <div class="SearchBox">
                <i class="icon icon-search"></i>
                <h6 level="6" text="Title" class="Title  Title6 "> Type your query and press Enter to start AI search </h6>
            </div>
          </div>
          <div class="right-nav">
            <details class="RefinementList-Col" open="">
              <summary class="RefinementList-Header" tabindex="-1">Filters</summary>
              <ol class="RefinementList">
                <li class="RefinementList-Item1">
                  <label class="Toggle Toggle_checkbox RefinementList-Toggle">
                    <input class="Toggle-input" label="Content" type="checkbox">
                      <div class="Toggle-display">
                        <i class="Toggle-display-icon icon-check-heavy"></i>
                        <i class="Toggle-display-icon icon-minus-heavy"></i>
                      </div>
                    <span class="Toggle-label" title="Content">Content</span>
                  </label>
                </li>
                <li class="RefinementList-Item1">
                  <label class="Toggle Toggle_checkbox RefinementList-Toggle">
                    <input class="Toggle-input" label="Discovery" type="checkbox">
                      <div class="Toggle-display">
                        <i class="Toggle-display-icon icon-check-heavy"></i>
                        <i class="Toggle-display-icon icon-minus-heavy"></i>
                      </div>
                    <span class="Toggle-label" title="Discovery">Discovery</span>
                  </label>
                </li>
                <li class="RefinementList-Item1">
                  <label class="Toggle Toggle_checkbox RefinementList-Toggle">
                    <input class="Toggle-input" label="Engagement" type="checkbox">
                      <div class="Toggle-display">
                        <i class="Toggle-display-icon icon-check-heavy"></i>
                        <i class="Toggle-display-icon icon-minus-heavy"></i>
                      </div>
                    <span class="Toggle-label" title="Engagement">Engagement</span>
                  </label>
                </li>
              </ol>
            </details>
             <div class="CustomSearch-Discovery">
               <span>Search powered by</span>
               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="30" viewBox="0 0 109.285 30.342" width="109">
                <defs>
                  <clipPath id="clip-path">
                    <rect data-name="Rectangle 1336" fill="#002840" height="16.756" id="Rectangle_1336" stroke="#707070" stroke-width="1" width="17.248"/>
                  </clipPath>
                </defs>
                <g id="br-experience-discovery-full" transform="translate(-1207 -2382)">
                  <path d="M8.4-47.742a5.684,5.684,0,0,1,2.778.691,5.292,5.292,0,0,1,2,1.9,5.1,5.1,0,0,1,.744,2.718,5.1,5.1,0,0,1-.744,2.718,5.292,5.292,0,0,1-2,1.9,5.684,5.684,0,0,1-2.778.691H4.485V-47.742Zm0,8.942a3.69,3.69,0,0,0,1.829-.471,3.482,3.482,0,0,0,1.328-1.3,3.6,3.6,0,0,0,.486-1.86,3.6,3.6,0,0,0-.486-1.86,3.482,3.482,0,0,0-1.328-1.3A3.69,3.69,0,0,0,8.4-46.057H6.3V-38.8Zm7.789-7.227a1.163,1.163,0,0,1-.858-.342,1.163,1.163,0,0,1-.342-.858,1.163,1.163,0,0,1,.342-.858,1.163,1.163,0,0,1,.858-.342,1.163,1.163,0,0,1,.858.342,1.163,1.163,0,0,1,.342.858,1.163,1.163,0,0,1-.342.858,1.163,1.163,0,0,1-.856.343Zm-.911,1.078H17.1v7.834H15.28ZM22.1-36.962a5.239,5.239,0,0,1-2.255-.448,3.174,3.174,0,0,1-1.435-1.283l1.44-1.017a2.553,2.553,0,0,0,.964.865,2.977,2.977,0,0,0,1.328.273,1.707,1.707,0,0,0,.994-.243.7.7,0,0,0,.342-.577.529.529,0,0,0-.235-.455,1.593,1.593,0,0,0-.531-.243q-.3-.076-1.04-.213a9.486,9.486,0,0,1-1.48-.4,2.494,2.494,0,0,1-1.04-.721,1.919,1.919,0,0,1-.425-1.3,2,2,0,0,1,.4-1.2,2.66,2.66,0,0,1,1.124-.865,4.131,4.131,0,0,1,1.67-.319,4.453,4.453,0,0,1,2.065.433,3.279,3.279,0,0,1,1.291,1.146l-1.458.941A2.137,2.137,0,0,0,21.869-43.6a1.65,1.65,0,0,0-.9.228.67.67,0,0,0-.357.577.573.573,0,0,0,.326.539,3.669,3.669,0,0,0,1.055.3,15.389,15.389,0,0,1,1.708.418,2.9,2.9,0,0,1,1.146.714,1.882,1.882,0,0,1,.516,1.4,2.174,2.174,0,0,1-.349,1.146,2.6,2.6,0,0,1-1.086.941,4.034,4.034,0,0,1-1.828.375Zm8.183,0a4.088,4.088,0,0,1-2.1-.539,3.8,3.8,0,0,1-1.442-1.473,4.181,4.181,0,0,1-.516-2.057,4.133,4.133,0,0,1,.524-2.057,3.859,3.859,0,0,1,1.45-1.473,4.03,4.03,0,0,1,2.065-.539,4.059,4.059,0,0,1,2.331.683,3.993,3.993,0,0,1,1.48,1.822l-1.685.577a2.461,2.461,0,0,0-.85-1.01,2.122,2.122,0,0,0-1.23-.387,2.207,2.207,0,0,0-1.184.319,2.155,2.155,0,0,0-.8.865,2.585,2.585,0,0,0-.281,1.2,2.382,2.382,0,0,0,.311,1.2,2.363,2.363,0,0,0,.835.865,2.137,2.137,0,0,0,1.131.319,2.119,2.119,0,0,0,1.268-.41,2.541,2.541,0,0,0,.858-1.078l1.64.638a3.973,3.973,0,0,1-1.473,1.837,4.031,4.031,0,0,1-2.335.7Zm8.624,0a4.2,4.2,0,0,1-2.126-.539,3.883,3.883,0,0,1-1.473-1.473,4.087,4.087,0,0,1-.531-2.057,4.087,4.087,0,0,1,.531-2.057,3.883,3.883,0,0,1,1.473-1.473A4.2,4.2,0,0,1,38.9-45.1a4.171,4.171,0,0,1,2.11.539,3.939,3.939,0,0,1,1.48,1.473,4.042,4.042,0,0,1,.539,2.057,4.042,4.042,0,0,1-.539,2.057A3.938,3.938,0,0,1,41.01-37.5a4.171,4.171,0,0,1-2.11.539ZM36.6-41.031a2.478,2.478,0,0,0,.3,1.2,2.23,2.23,0,0,0,.827.865,2.257,2.257,0,0,0,1.184.319,2.257,2.257,0,0,0,1.184-.319,2.23,2.23,0,0,0,.827-.865,2.478,2.478,0,0,0,.3-1.2,2.478,2.478,0,0,0-.3-1.2,2.23,2.23,0,0,0-.827-.865,2.258,2.258,0,0,0-1.184-.319,2.258,2.258,0,0,0-1.184.319,2.23,2.23,0,0,0-.827.865,2.478,2.478,0,0,0-.3,1.2Zm9.945,3.917-3.188-7.834h1.959L47.33-39.7l1.928-5.253H51.2l-3.112,7.834ZM55.574-45.1a3.976,3.976,0,0,1,1.936.493,3.876,3.876,0,0,1,1.458,1.389,3.844,3.844,0,0,1,.554,2.065,4.711,4.711,0,0,1-.061.774H53.3a2.234,2.234,0,0,0,.8,1.3,2.391,2.391,0,0,0,1.533.493,2.348,2.348,0,0,0,2.186-1.26l1.518.638a3.973,3.973,0,0,1-1.473,1.647,3.947,3.947,0,0,1-2.141.6,4.388,4.388,0,0,1-2.179-.539,3.839,3.839,0,0,1-1.5-1.473,4.086,4.086,0,0,1-.531-2.057,4.133,4.133,0,0,1,.524-2.057,3.859,3.859,0,0,1,1.45-1.473,4.059,4.059,0,0,1,2.087-.54Zm2.247,3.34a2.138,2.138,0,0,0-.789-1.222,2.212,2.212,0,0,0-1.412-.493A2.34,2.34,0,0,0,54.155-43a2.363,2.363,0,0,0-.843,1.245ZM62.6-43.84a3.291,3.291,0,0,1,1.177-.934,3.387,3.387,0,0,1,1.465-.326v1.928l-.3-.015a2.457,2.457,0,0,0-1.731.562,1.877,1.877,0,0,0-.607,1.442v4.069H60.782v-7.834H62.6Zm4.357,10.521,1.64-4.19-3.021-7.439h1.959L69.557-39.7l1.928-5.253h1.943L68.8-33.318Z" data-name="Path 3108" fill="var(--search-modal-text-color)" id="Path_3108" transform="translate(1242.857 2439.598)"/>
                  <g data-name="Group 3355" id="Group_3355" transform="translate(1207 2382)">
                    <path d="M4.985,0H25.357a4.985,4.985,0,0,1,4.985,4.985V25.357a4.985,4.985,0,0,1-4.985,4.985H4.985A4.985,4.985,0,0,1,0,25.357V4.985A4.985,4.985,0,0,1,4.985,0Z" data-name="Path 3109" fill="#ffd500" id="Path_3109"/>
                    <g clip-path="url(#clip-path)" data-name="Group 3354" id="Group_3354" transform="translate(6.916 6.678)">
                      <g data-name="Group 3353" id="Group_3353" transform="translate(0.214 -34.126)">
                        <path d="M404.94,186.25c.228.11.435.247.657.366C405.38,186.491,405.163,186.367,404.94,186.25Z" data-name="Path 3110" fill="#002840" id="Path_3110" transform="translate(-378.999 -169.405)"/>
                        <path d="M362.012,166.485V153.167h-8.019v20.355a22.164,22.164,0,0,1,8.019-7.037Z" data-name="Path 3111" fill="#002840" id="Path_3111" transform="translate(-353.993 -153.167)"/>
                        <path d="M404.55,186.037l-.008.011c.067.034.136.063.2.1C404.677,186.113,404.618,186.069,404.55,186.037Z" data-name="Path 3112" fill="#002840" id="Path_3112" transform="translate(-378.803 -169.3)"/>
                        <path d="M381.1,184.807c-.221-.119-.429-.256-.657-.366-.066-.035-.136-.064-.2-.1l-4.228,6.4a10.35,10.35,0,0,1,6.317,9.733,10.188,10.188,0,0,1-10.159,10.493c-5.948,0-10.159-4.745-10.159-10.493a10.135,10.135,0,0,1,9.764-10.453l4.62-6.995a19.732,19.732,0,0,0-4.226-.464,18.659,18.659,0,0,0-10.159,2.886h0a18.072,18.072,0,0,0-8.019,15.028h0v17.91h8.019V215.5a18.66,18.66,0,0,0,10.159,2.885A19.177,19.177,0,0,0,379.419,217a18.072,18.072,0,0,0,1.683-32.2Z" data-name="Path 3113" fill="#002840" id="Path_3113" transform="translate(-353.993 -167.596)"/>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
             </div>
          </div>
        </div>
      </div>
    </div>
  `
}



/* H E L P E R   F U N C T I O N S */

function generateExcerpt({ title, searchQuery, description }) {

    // Transform Markdown document to plain text
    description = description.replace(/\n/g, "\\n"); // Stringify new lines
    description = description.replace(/block:.*?\/block\]/g, ''); // Remove special blocks
    description = description.replace(/\]\(.*?\)/g, '').replace(/\[/g, ''); // Remove links
    description = description.replace(/[*_#<>|]/g, ''); // Remove styles
    description = description.replace(/--+/g, ''); // Remove '---------'
    const sectionsFound = description.split('\\n').filter(section => section.length > 10)
        .map(i => i.trim().replace(/^-\s*/, "")); // Remove white space & bulletpoints

    // Find section with highest number of matches
    let bestMatch = sectionsFound?.length > 0 ? sectionsFound[0] : title;
    let bestMatchesCount = 0;
    const keywords = searchQuery.split(' ');
    sectionsFound.forEach(section => {
        const regex = new RegExp(keywords.join("|"), "gi");
        const matchesFound = section.match(regex)?.length || 0;
        if (matchesFound > bestMatchesCount) {
            bestMatchesCount = matchesFound;
            bestMatch = section;
        }
    });

    // Highlight matches
    let excerpt = bestMatch;
    keywords.forEach(keyword => {
        keyword = keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '');
        const matchesFound = excerpt.matchAll(new RegExp(keyword, 'gi'));
        const indexesFound = [...matchesFound].map(a => a.index).reverse();
        const length = keyword.length;

        indexesFound.forEach(position => {
            excerpt = excerpt.substring(0, position)
                + '<em class="ais-Snippet-highlighted">' + excerpt.substring(position, position + length) + '</em>'
                + excerpt.substring(position + length);
        });
    });

    return excerpt;
}

function capitalizeEveryWord(string) {
    return string.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

function debounce(fn, args, delay) {
    clearTimeout(fn.timeoutID);
    fn.timeoutID = setTimeout(() => fn(args), delay);
}