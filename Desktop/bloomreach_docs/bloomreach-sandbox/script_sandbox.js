$(window).on('pageLoad', () => {
    $('.hub-subheader-breadcrumbs').remove();
    $('.hub-reference-section.hub-reference-section-code').attr('style', 'display:block');
    $('#hub-search').attr('style', 'display:inline !important');

    if (document.URL === "https://docs.exponea.com/page/hashpage") {
        createGui();
        let labelOut, publicKeyInput, privateKeyInput;

        function createGui() {
            //Locate the body
            const body = document.getElementsByTagName("body")[0];
            const hashButton = document.createElement("button");
            const divIn = document.getElementById("myDiv");

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
        }

        function hash() {
            const publicKey = publicKeyInput.value;
            const privateKey = privateKeyInput.value;

            labelOut.innerHTML = window.btoa(publicKey + ":" + privateKey);
        }
    }
});

// Header improvements - START
let isPageLoad = false; // variable for append child only once
$(window).on('pageLoad', () => {
    
    $(function () {
        var match = window.location.pathname.match(/\/[^\/]+$/);
        if (!match) return;

        var segment = match[0]; 

        $('#ssr-main .rm-Header .rm-Header-top .rm-Header-top-link .dropdown-menu-link ul li a')
            .each(function () {
                var href = $(this).attr('href') || $(this).attr('to') || '';

                if (href.indexOf(segment) !== -1) {
                    $(this).addClass('top-active');
                }
            });
    });

    const otherResourcesContent = `
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

    const projectsContent = `
    <div class="dropdown-menu-link">
        <ul>
            <li class="dropdown-nav-item">
                <a href="https://documentation.bloomreach.com/engagement/" class="dropdown-nav-link">
                    <img src="https://br-cms.bloomreach.com/site/binaries/content/gallery/newbloomreach/assets/br-experience-engagement.svg" alt="" class="dropdown-item-icon" />
                    <span>Engagement</span>
                </a>
            </li>
            <li class="dropdown-nav-item">
                <a href="https://documentation.bloomreach.com/discovery/" class="dropdown-nav-link">
                    <img src="https://br-cms.bloomreach.com/site/binaries/content/gallery/newbloomreach/assets/br-experience-discovery.svg" alt="" class="dropdown-item-icon" />
                    <span>Discovery</span>
                </a>
            </li>
            <li class="dropdown-nav-item">
                <a href="https://documentation.bloomreach.com/engagement/docs/get-started-with-bloomreach-clarity" class="dropdown-nav-link">
                    <img src="https://files.readme.io/86f2117f3d000ce5757a79cb62c95c431430559e3e93bc99e3ad124a38893379-image_195.svg" alt="" class="dropdown-item-icon" />
                    <span>Clarity</span>
                </a>
            </li>
            <li class="dropdown-nav-item">
                <a href="https://www.bloomreach.com/en/blog/bloomreach-data-hub" class="dropdown-nav-link">
                    <img src="https://files.readme.io/9c2182532f9a19070ca979e1cba270d6e4fabea769deeeee33c2fe6d29a747a9-image_196.svg" alt="" class="dropdown-item-icon" />
                    <span>Data Hub</span>
                </a>
            </li>
            <li class="dropdown-nav-item">
                <a href="https://documentation.bloomreach.com/content/docs/content-saas-vs-brxm" class="dropdown-nav-link">
                    <img src="https://br-cms.bloomreach.com/site/binaries/content/gallery/newbloomreach/assets/br-experience-content.svg" alt="" class="dropdown-item-icon"/>
                    <span>Content BRXM</span>
                    <span class="external-arrow">
                      <img src="https://files.readme.io/566f0a1565dd85113cc03d9a0fb06523d2d5469827d20f0065b036a49ffc8248-Arrow_32.svg" alt="" />
                    </span>
                </a>
            </li>
            <li class="dropdown-nav-item">
                <a href="https://documentation.bloomreach.com/content/docs/introduction-to-content-saas" class="dropdown-nav-link">
                    <img src="https://br-cms.bloomreach.com/site/binaries/content/gallery/newbloomreach/assets/br-experience-content.svg" alt="" class="dropdown-item-icon" />
                    <span>Content SaaS</span>
                </a>
            </li>
        </ul>
    </div>
`;


    const img = `<span class="icon-chevron"></span>`;

    if (!isPageLoad) {
        setTimeout(() => {
            // 6. link = Projects
            const projectsButton = $("#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .rm-Header-top-link:nth-of-type(3)")
                .removeAttr("href")
                .removeAttr("target");

            // 7. link = Other Resources
            const otherResourcesButton = $("#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .rm-Header-top-link:nth-of-type(4)")
                .removeAttr("href")
                .removeAttr("target");

            // Mobile: second to last = Projects, last = Other Resources
            const projectsButtonMobile = $("#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .NavItem-item1gDDTqaXGhm1:nth-last-child(2)");
            const otherResourcesButtonMobile = $("#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .NavItem-item1gDDTqaXGhm1:last-child");
            
            // Projects dropdown (desktop + mobile)
            projectsButton.append(projectsContent);
            projectsButton.prepend(img);
            projectsButtonMobile.append(projectsContent);
            projectsButtonMobile.prepend(img);
            projectsButtonMobile.find('.dropdown-menu-link').addClass('dropdown-menu-link-show'); // vždy otvorené na mobile, rovnako ako OtherResources

            // Other Resources dropdown (desktop + mobile)
            otherResourcesButton.append(otherResourcesContent);
            otherResourcesButton.prepend(img);
            otherResourcesButtonMobile.append(otherResourcesContent);
            otherResourcesButtonMobile.prepend(img);
            otherResourcesButtonMobile.find('.dropdown-menu-link').addClass('dropdown-menu-link-show');

            const desktopButtons = projectsButton.add(otherResourcesButton);

            desktopButtons.off("click").on("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
            
                const menu = $(this).find(".dropdown-menu-link");
                const icon = $(this).find(".icon-chevron");
            
                $(".dropdown-menu-link").not(menu).removeClass("dropdown-menu-link-show");
                $(".icon-chevron").not(icon).removeClass("dropdown-img-show");
            
                menu.toggleClass("dropdown-menu-link-show");
                icon.toggleClass("dropdown-img-show");
            });
        }, 200);
        isPageLoad = true;
    }
});
// Header improvements - END

// Collapsible sidebar navigation - START
$(window).on('pageLoad', () => {
    const waitForSidebar = setInterval(() => {
        const $sidebar = $('.rm-Sidebar-section');
        if (!$sidebar.length) return;

        clearInterval(waitForSidebar);
        initCollapsibleSidebar();
    }, 100);

    function initCollapsibleSidebar() {
        // Open section with active link
        $('.rm-Sidebar-link.active').closest('.rm-Sidebar-section').addClass('active').slideDown();
        $('.rm-Sidebar-link.active').closest('.rm-Sidebar-section').find('.rm-Sidebar-list').first().stop().slideDown(0);

        // Add chevron to headings if missing
        $('.Sidebar-headingTRQyOa2pk0gh').each(function () {
            if (!$(this).children('.icon-chevron').length) {
                $(this).prepend("<span class='icon-chevron'></span>");
            }
        });

        // Replace <h2> with <p> for sidebar headings
        $('.rm-Sidebar-heading').each(function () {
            const $replacement = $('<p>').html(this.innerHTML);
            $.each(this.attributes, (_, attr) => $replacement.attr(attr.name, attr.value));
            $(this).replaceWith($replacement);
        });

        // Toggle section on click
        $('.Sidebar-headingTRQyOa2pk0gh').off('click').on('click', function () {
            const $section = $(this).closest('.rm-Sidebar-section');
            $section.toggleClass('active');
            // $(this).toggleClass('section-expanded');
            $section.find('.rm-Sidebar-list').first().stop().slideToggle(300);
        });
    }
});
// Collapsible sidebar navigation - END

// Observe changes on DOM - START
// $(() => {
//     const observer = new MutationObserver(function (mutations, observer) {
//         $('.Pagination-link1SfnH-8-DxMA').off('click').on('click', () => {
//             removeFeedbackFromTOC();
//         });
//     });
//
//     observer.observe(document, {
//         subtree: true,
//         attributes: true
//     });
// });
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
$(document).ready(function() {
    setTimeout(function() {
        // Správny scrollovací kontajner
        const $scrollContainer = $('.ContentWithOwlbot-content2X1XexaN8Lf2');
        
        if ($scrollContainer.length === 0) {
            console.log('Scroll container not found');
            return;
        }
        
        console.log('Progress bar initialized on content container');
        
        // Nastavenie top pozície
        let headerHeight = $('.rm-Header').outerHeight() || 119;
        
        if (window.location.pathname.includes('/recipes')) {
            $('.progress-bar').css('top', '85px');
        } else {
            $('.progress-bar').css('top', headerHeight + 'px');
        }

        // Scroll event na správnom kontajneri
        $scrollContainer.on('scroll', function() {
            const pixels = this.scrollTop;
            const pageHeight = this.scrollHeight - this.clientHeight;
            
            if (pageHeight <= 0) return;
            
            const progress = (100 * pixels / pageHeight);
            const $bar = $('.progress-bar');
            
            if (pixels > 100) {
                $bar.css({
                    'display': 'block',
                    'width': progress + '%'
                });
            } else {
                $bar.css('display', 'none');
            }
        });
        
    }, 1000);
});
// Progress bar - END

// Dark mode vCursor - START
const setDarkMode = () => {
    setTimeout(() => {
        localStorage.setItem('color-scheme', 'dark');
        $('html').attr('data-color-mode', 'dark');
    }, 100);
    $('.dark-mode-btn').prop('checked', true);
    $('.rm-Logo .rm-Logo-img').attr('src', 'https://files.readme.io/0e23000-small-br_docs-secondary.png');
    $('.footer .footer-main .logo-footer .logo-footer-dark').removeClass('d-none');
    $('.footer .footer-main .logo-footer .logo-footer-white').addClass('d-none');
    $('.dark-mode .dark-mode-span').html('Switch to light mode');
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
    $('.dark-mode .dark-mode-span').html('Switch to dark mode');
}

const darkModeHtml = `
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

function addDarkModeButton() {
    const container = $('.Header-bottom2eLKOFXMEmh5 .rm-Container .Header-searchtb6Foi0-D9Vx');
    if (container.length && container.find('.dark-mode').length === 0) {
        container.prepend(darkModeHtml);
        attachDarkModeHandler();
        if (!!localStorage.getItem('dark-mode')) setDarkMode();
        else setLightMode();
    }
}

function attachDarkModeHandler() {
    $('.dark-mode').off('click').on('click', function () {
        if ($('.dark-mode-btn')[0].checked) {
            localStorage.removeItem('dark-mode');
            setLightMode();
        } else {
            localStorage.setItem('dark-mode', 'true');
            setDarkMode();
        }
    });
}

$(window).on('load', () => {
    addDarkModeButton();
    setInterval(addDarkModeButton, 200);
});
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
    setTimeout(() => {
        $('a[href*="#"]').off('click').on('click', function (e) {
            const url = $(this).attr('href').split('#');
            const path = url[0];
            const hash = url[1];

            if (window.location.href.split('#')[0] === path || window.location.pathname === path || path === '') {
                e.preventDefault();
                $(this).blur();

                const heading = $(`.heading.header-scroll .heading-anchor#${hash}`).parent();
                const scrollContainer = $('.ContentWithOwlbot-content2X1XexaN8Lf2');
                
                if (scrollContainer.length) {
                    scrollContainer.animate({
                        scrollTop: heading.offset().top - scrollContainer.offset().top + scrollContainer.scrollTop() - 150
                    }, 300);
                } else {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: heading.offset().top - 150
                    }, 300);
                }
                
                window.location.hash = hash;

                // Fix sidebar visibility
                setTimeout(() => {
                    $('.rm-Sidebar-section.active').each(function () {
                        const $section = $(this);
                        const $list = $section.find('.rm-Sidebar-list').first();
                        if (!$list.is(':visible')) $list.css('display', 'block');
                    });
                }, 1);

            } else removeFeedbackFromTOC();

            if ($(this).closest('.content-toc').length > 0) {
                $('.content-toc a').removeClass('active');
                $(this).addClass('active');
            }
        });
    }, 300);

    // Handle initial anchor on page load
    const urlHash = window.location.hash;
    if (urlHash.length > 0) {
        // Počkať kým sa stránka úplne načíta
        setTimeout(() => {
            const heading = $(`.heading.header-scroll .heading-anchor${urlHash}`).parent();
            if (heading.length) {
                const scrollContainer = $('.ContentWithOwlbot-content2X1XexaN8Lf2');
                
                if (scrollContainer.length) {
                    scrollContainer.scrollTop(heading.offset().top - scrollContainer.offset().top + scrollContainer.scrollTop() - 150);
                } else {
                    window.scrollTo(0, heading.offset().top - 150);
                }
            }
        }, 100); // Skrátený delay na 100ms
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

        $('.MobileFlyout1hHJpUd-nYkd a').each(function () {
            $(this).text() === 'Home' && $(this).hasClass('NavItem_dropdown-muted1xJVuczwGc74') && $(this).remove();
            $(this).text() === 'Engagement' && $('.MobileFlyout-logo3Lq1eTlk1K76').after($(this));
            $(this).text() === 'Content' && $('.MobileFlyout1hHJpUd-nYkd .NavItem-item1gDDTqaXGhm1:nth-child(2)').after($(this));
            $(this).text() === 'Discovery' && $('.MobileFlyout1hHJpUd-nYkd .NavItem-item1gDDTqaXGhm1:nth-child(3)').after($(this));
        });
        $('.MobileFlyout1hHJpUd-nYkd .NavItem-item1gDDTqaXGhm1:nth-child(4)').after($('.MobileFlyout1hHJpUd-nYkd .MobileFlyout-divider10xf7R2X1MeW'));

        window.isPageLoad = true;
    }
});
// Mobile menu changes - END

// TOC active item - START
function isInViewport(el) {
    if (!el) return;
    return $(window).scrollTop() >= $(el).offset().top - 170;
}

function setActiveItem(title) {
    const href = $(title).find('a').attr('href');
    $('.toc-children li a').removeClass('active');
    $(`.toc-children li a[href="${href}"]`).addClass('active');
}

$(window).on('pageLoad', () => {
    const headings = $('.markdown-body h1, .markdown-body h2');

    headings.each(function () {
        if (isInViewport(this)) setActiveItem(this);
    });

    $(window).on('scroll', () => {
        headings.each(function () {
            if (isInViewport(this)) setActiveItem(this);
        });
    });
});
// TOC active item - END

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

    // if owlbot is on remove owl search bars and store the original to use later in modal with original event listeners
    setTimeout(() => {
        if (!window.location.href.includes('?owlbotTrial=true')) {
            $originalBarMobile = $(".rm-Header-Top .rm-Container .Dropdown.Dropdown_closed");
            /* TEMPORARILY FIX FOR SEARCH, ROLLBACK LATER */
            $originalBarDesktop = $(".rm-Header-bottom .rm-Container .rm-SearchToggle");
            /* TEMPORARILY FIX FOR SEARCH, ROLLBACK LATER */

            $clonedBarMobileSearch = $originalBarMobile.clone();
            $headerSearch = $('.Header-searchtb6Foi0-D9Vx');
            $originalBarMobile.remove();
            $headerSearch.append($clonedBarMobileSearch);

            $clonedBarDesktopSearch = $originalBarDesktop.clone();
            $originalBarDesktop.remove();
            $headerSearch.append($clonedBarDesktopSearch);

            $clonedBarMobile = $(".rm-Header-Top .rm-Container .Dropdown.Dropdown_closed");
            /* TEMPORARILY FIX FOR SEARCH, ROLLBACK LATER */
            $clonedBarDesktop = $clonedBarDesktopSearch;
            /* TEMPORARILY FIX FOR SEARCH, ROLLBACK LATER */


            // Clone Algolia search bars to remove their original event listeners
        } else {
            $originalBarMobile = $(".rm-Header-top .rm-Container .rm-SearchToggle");
            $originalBarDesktop = $(".rm-Header-bottom .rm-Container .rm-SearchToggle");
            $originalBarMobile.replaceWith($originalBarMobile.clone());

            $originalBarDesktop.replaceWith($originalBarDesktop.clone());

            $clonedBarMobile = $(".rm-Header-top .rm-Container .rm-SearchToggle");
            $clonedBarDesktop = $(".rm-Header-bottom .rm-Container .rm-SearchToggle");
        }

        if (debuggingMode) $clonedBarMobile.addClass('bg-warning');

        const isMac = /(Mac|iPhone|iPod|iPad)/i.test(window.navigator.userAgent.toLowerCase());
        $clonedBarDesktop.find(".rm-SearchToggle-shortcut").text(isMac ? '⌘-K' : 'Ctrl-K');
        if (debuggingMode) $clonedBarDesktop.addClass('bg-warning');

        /* TEMPORARILY FIX FOR SEARCH, ROLLBACK LATER */
        // pointer events for search are turned ofF until search is completely loaded
        // $clonedBarDesktop.closest('.Dropdown.Dropdown_closed')[0].style.pointerEvents = 'all';
        $clonedBarDesktop.css("pointer-events", "all");
        /* TEMPORARILY FIX FOR SEARCH, ROLLBACK LATER */

        // if ($('.rm-Container .Header-searchtb6Foi0-D9Vx > .Dropdown.Dropdown_closed')[0]) {
        //     $('.rm-Container .Header-searchtb6Foi0-D9Vx > .Dropdown.Dropdown_closed')[0].style.pointerEvents = 'all';
        // }

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
                e.stopPropagation(); closeSearchModal();
            }
        });

        // Append Owlbot search inside modal when AI Mode is on
        $searchModalAIToggle = $('#toggle-AI-mode');
        const newSVG = '' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16">\n' +
            '  <path d="M1.40568 3.3877C1.41773 3.39879 1.4297 3.40996 1.4416 3.42122C1.48856 3.46567 1.53436 3.51147 1.57881 3.55843C1.59007 3.57032 1.6013 3.58236 1.61239 3.59441C1.80589 3.80462 1.97412 4.03857 2.11259 4.29174C2.28008 4.59798 2.71992 4.59798 2.88741 4.29174C3.02588 4.03857 3.19411 3.80462 3.3876 3.59441C3.3987 3.58236 3.40987 3.57039 3.42113 3.55849C3.46558 3.51153 3.51137 3.46573 3.55834 3.42128C3.57023 3.41002 3.58227 3.39879 3.59432 3.3877C3.80453 3.1942 4.03847 3.02597 4.29165 2.8875C4.59789 2.72001 4.59789 2.28017 4.29165 2.11268C4.03847 1.97421 3.80453 1.80598 3.59431 1.61248C3.58226 1.60139 3.57029 1.59022 3.5584 1.57896C3.51144 1.53451 3.46564 1.48872 3.42119 1.44175C3.40993 1.42986 3.3987 1.41782 3.3876 1.40577C3.19411 1.19556 3.02588 0.961616 2.88741 0.708445C2.71992 0.402198 2.28008 0.402198 2.11259 0.708445C1.97412 0.961616 1.80589 1.19556 1.61239 1.40578C1.6013 1.41782 1.59013 1.4298 1.57887 1.44169C1.53442 1.48865 1.48862 1.53445 1.44166 1.5789C1.42977 1.59016 1.41773 1.60139 1.40568 1.61249C1.19547 1.80598 0.961525 1.97422 0.708353 2.11268C0.402106 2.28017 0.402107 2.72001 0.708354 2.8875C0.961524 3.02597 1.19547 3.1942 1.40568 3.3877Z"/>\n' +
            '  <path d="M10.0967 1.44219C9.62256 0.575256 8.37746 0.575263 7.90332 1.44219L6.42929 4.13734C6.13105 4.68266 5.68269 5.13102 5.13737 5.42926L2.44222 6.90329C1.57529 7.37743 1.57529 8.62254 2.44222 9.09668L5.13737 10.5707C5.68269 10.8689 6.13105 11.3173 6.42929 11.8626L7.90332 14.5578C8.37746 15.4247 9.62257 15.4247 10.0967 14.5578L11.5707 11.8626C11.869 11.3173 12.3173 10.8689 12.8627 10.5707L15.5578 9.09667C16.4247 8.62253 16.4247 7.37743 15.5578 6.90329L12.8627 5.42926C12.3173 5.13102 11.869 4.68266 11.5707 4.13734L10.0967 1.44219ZM7.74532 4.8571L9.00001 2.563L10.2547 4.8571C10.6906 5.6541 11.3459 6.3094 12.1429 6.74529L14.437 7.99998L12.1429 9.25467C11.3459 9.69056 10.6906 10.3459 10.2547 11.1429L9.00001 13.437L7.74532 11.1429C7.30943 10.3459 6.65414 9.69057 5.85713 9.25467L3.56303 7.99998L5.85713 6.74529C6.65413 6.3094 7.30943 5.65411 7.74532 4.8571Z"/>\n' +
            '</svg>'
        function replaceOrbIcon(){
            const targetDivs = $('.rm-OwlbotAI-answer.ChatGPT-answer2_nurjeZMJ1H');//.not('.AISearch-answer-wrapper  .rm-OwlbotAI-answer.ChatGPT-answer2_nurjeZMJ1H')
            if(targetDivs) {
                // const element = $('.ChatGPT2gHd5auSkN45.ChatGPT-form3ryerM2geHNU');
                // if (element.length > 0 && element.children().length < 3) {
                //     element.prepend(newSVG);
                // }
                targetDivs.each(function() {
                    const targetDiv = $(this);
                    const element = targetDiv.find('.ChatGPT2gHd5auSkN45.ChatGPT-form3ryerM2geHNU');
                    if (element.length > 0 && element.children().length < 3) {
                        element.prepend(newSVG);
                    }
                });
            }
        }
        function copySearchedContent() {
            const targetDiv = $('.SearchBert-owlbotContainer3btgDGGh1J7d > .rm-OwlbotAI-answer.ChatGPT-answer2_nurjeZMJ1H').last();
            if (targetDiv) {
                if (targetDiv.children().length > 0) {
                    // $('.SearchBert-owlbotContainer3btgDGGh1J7d').not('.AISearch-answer-wrapper').hide();
                    var targetWrapper = $('.AISearch-answer-history-wrapper');
                    // const $contentToCopy = $('.rm-OwlbotAI-answer.ChatGPT-answer2_nurjeZMJ1H').clone();
                    const $contentToCopy = targetDiv.clone();
                    const newContentText = targetDiv.clone().text().replace(/\n/g, '').trim();
                    const currentContentText = targetWrapper.text().replace(/\n/g, '').trim();

                    const votingDiv = $('.rm-OwlbotAI-answer.ChatGPT-answer2_nurjeZMJ1H .ChatGPT-answer-voting2JHUGjSzRL5g');
                    if (votingDiv.length > 0 && targetWrapper.length > 0) {
                        if (targetWrapper.find('.ChatGPT-answer-voting2JHUGjSzRL5g').length === 0) {
                            const $votingDivToCopy = votingDiv.clone();
                            targetWrapper.append($votingDivToCopy);
                        }
                    }

                    if (currentContentText !== newContentText && newContentText.length > 30) {
                        $('.AISearch-Col > .SearchBox')[0].style.display = 'none';
                        targetWrapper.empty();
                        targetWrapper.html($contentToCopy);
                        // $('.SearchBert-owlbotContainer3btgDGGh1J7d').hide();
                    }
                    // const wrapperOffset = targetWrapper.parent().offset()-8;
                    // const wrapperWidth = targetWrapper.parent().outerWidth()-50;
                    // const wrapperOffset = targetWrapper.offset();
                    // const wrapperWidth = targetWrapper.innerWidth();
                    // const wrapperHeight = targetWrapper.innerHeight()-16;//.parent()
                    //
                    // const translateX = wrapperOffset.left;//56;
                    // const translateY = wrapperOffset.top;//88;
                    //
                    // $owlDropdown = $('#tippy-1');
                    // $owlDropdown.css({
                    //     // position: 'absolute',
                    //     // top: wrapperOffset.top,
                    //     // left: wrapperOffset.left,
                    //     'width': wrapperWidth,
                    //     'max-width': wrapperWidth,
                    //     'max-height': wrapperHeight,
                    //     // margin: '0 !important',
                    //     transform: `translate(${translateX}px, ${translateY}px)`,
                    // });
                    // $('.SearchBert-owlbotContainer3btgDGGh1J7d').show();
                }
            }
        }
        function checkAndMoveTippy() {
            const tippy = $('#tippy-1, #tippy-2, #tippy-3');
            const targetDiv = $('.AISearch-answer-wrapper');

            if (tippy.length) {
                if(!targetDiv.has(tippy).length){
                    // targetWrapper.empty();
                    // targetWrapper.html($contentToCopy);
                    // const wrapperOffset = targetDiv.offset();
                    const wrapperWidth = targetDiv[0].getBoundingClientRect().width-8;// - 10;
                    const wrapperHeight = targetDiv.innerHeight()-30;
                    const translateX = 16;//wrapperOffset.left;
                    const translateY = 64;//wrapperOffset.top;
                    tippy.css({
                        'width': wrapperWidth,
                        'max-width': wrapperWidth,
                        // 'max-height': wrapperHeight,
                        transform: `translate(${translateX}px, ${translateY}px)`
                    });

                    targetDiv.empty();
                    tippy.appendTo(targetDiv);
                    $('.AISearch-answer-history-wrapper').hide();
                    // targetDiv.show();
                    console.log(tippy);
                }
            } else {
                $('.AISearch-answer-history-wrapper').show();
                // targetDiv.hide();
            }
        }

        setInterval(function() {
            checkAndMoveTippy();
            replaceOrbIcon();
            copySearchedContent()
        }, 30);

        let AIsearchInitialized = false;
        $searchModalAIToggle.on('change', (e) => {
            const elementsToHide = [
                '.CustomSearch_withSidebar > .right-nav',
                '.CustomSearch-Col',
                '.RefinementList-Col',
                '.CustomSearch-Discovery'
            ];

            const elementsToShow = [
                '.CustomSearch-Col',
                '.RefinementList-Col',
                '.CustomSearch-Discovery',
                '.CustomSearch_withSidebar > .right-nav'
            ];


            if (e.target.checked) {
                const $searchModalAISearchCol = $('.AISearch-Col');

                // Prepend elements
                $searchModalAISearchCol.prepend($originalBarMobile);
                $searchModalAISearchCol.prepend($originalBarDesktop);

                // Hide elements
                elementsToHide.forEach(selector => $(selector)[0].style.display = "none");
                $searchModalAISearchCol[0].style.display = "flex";

                if (!AIsearchInitialized) {

                    // function handleAIAnswer(){
                    //     const targetDiv = $('.rm-OwlbotAI-answer.ChatGPT-answer2_nurjeZMJ1H');
                    //     if(targetDiv){
                    //         if (targetDiv.children().length < 3) {
                    //             targetDiv.hide();
                    //         } else {
                    //             const element = $('.ChatGPT2gHd5auSkN45.ChatGPT-form3ryerM2geHNU');
                    //             if (element.length > 0 && element.children().length < 3) {
                    //                 element.prepend(newSVG);
                    //             }
                    //             // $('.SearchBert-Prompt3UVFfRcBSAeq').val('');
                    //             targetDiv.show();
                    //         }
                    //     }
                    //     setTimeout(handleAIAnswer, 500);
                    // }
                    // setTimeout(handleAIAnswer, 500);

                    const $input = $('.AISearch-Col .Dropdown .SearchBert1u4IeBwd-ET6 input');
                    $input[0].placeholder = "Ask me anything …";

                    $input
                        .off('focus.bordering blur.bordering keyup.bordering submit.bordering input.bordering')
                        .on('focus.bordering', function() {
                            $(this).parent('.SearchBert1u4IeBwd-ET6').addClass('focused');
                        })
                        .on('blur.bordering', function() {
                            $(this).parent('.SearchBert1u4IeBwd-ET6').removeClass('focused');
                        })
                        .on('keyup.bordering', function(event) {
                            // if (event.key === 'Enter') {
                            //     $('.AISearch-Col > .SearchBox')[0].style.display = "none";
                            //
                            //     const $aiSearchCol = $('.AISearch-Col');
                            //     function toggleFocus() {
                            //         if (document.activeElement === $input[0]) {
                            //             // setTimeout(function() {
                            //             //     $aiSearchCol.focus();
                            //             //     setTimeout(function() {
                            //             //         $aiSearchCol.focus();
                            //             //     }, 100);
                            //             // }, 100);
                            //             // setTimeout(function() {
                            //             //     $input.blur();
                            //             //     setTimeout(function() {
                            //             //         $input.blur();
                            //             //     }, 100);
                            //             // }, 100);
                            //             $input.parent('.SearchBert1u4IeBwd-ET6').removeClass('focused');
                            //         } else {
                            //             // setTimeout(function() {
                            //             //     $input.focus();
                            //             //     setTimeout(function() {
                            //             //         $input.focus();
                            //             //     }, 100);
                            //             // }, 100);
                            //             $input.parent('.SearchBert1u4IeBwd-ET6').addClass('focused');
                            //         }
                            //     }
                            //
                            //     // Ensure that the div is focusable
                            //     $aiSearchCol.attr('tabindex', '-1');
                            //
                            //     // Toggle focus every 300 milliseconds (0.3 seconds)
                            //     const focusInterval = setInterval(function() {
                            //         // Check for the existence of the div
                            //         if ($('.SearchBert-owlbotContainer3btgDGGh1J7d').length > 0) {
                            //             clearInterval(focusInterval);
                            //             // setTimeout(function() {
                            //             //     $input.focus();
                            //             //     setTimeout(function() {
                            //             //         $input.focus();
                            //             //     }, 100);
                            //             // }, 100);
                            //             // $input.parent('.SearchBert1u4IeBwd-ET6').addClass('focused');
                            //             $('.Flex_row.ChatGPT-inputjTLlvekrhngw').focus();
                            //
                            //             replaceOrbIcon();
                            //         } else {
                            //             toggleFocus();
                            //         }
                            //     }, 300);
                            // } else {
                            //     setInterval(function() {
                            //         replaceOrbIcon();
                            // }, 100);
                            // }
                        })
                    // .on('input.bordering', function() {
                    //     toggleSendButton();
                    // });

                    $input.closest('form')
                        .on('submit.bordering', function(event) {
                            event.preventDefault();
                        });

                    const iconWrapper = $('.AISearch-Col .Dropdown .Flex_row .IconWrapper.Icon-wrapper2z2wVIeGsiUy')[0];
                    if (iconWrapper) {
                        const newDiv = document.createElement('div');
                        newDiv.innerHTML = newSVG;
                        iconWrapper.parentNode.insertBefore(newDiv, iconWrapper.nextSibling);
                    }

                    const firstElement = $('<div class="AI-toggle"><label class="AI-mode-label-back" for="toggle-AI-mode"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1.74021 7.46911C1.44732 7.76201 1.44731 8.23688 1.74021 8.52977L6.06021 12.8498C6.3531 13.1427 6.82797 13.1427 7.12087 12.8498C7.41376 12.5569 7.41376 12.082 7.12087 11.7891L4.0812 8.74944L12.8283 8.74944C13.2101 8.74944 13.5196 8.41366 13.5196 7.99944C13.5196 7.58523 13.2101 7.24944 12.8283 7.24944L4.0812 7.24944L7.12087 4.20977C7.41376 3.91688 7.41376 3.44201 7.12087 3.14911C6.82798 2.85622 6.3531 2.85622 6.06021 3.14911L1.74021 7.46911Z"/></svg> Back</span></label></div>');
                    const forthElement = $('<div class="AI-tooltip" id="OwlbotTooltip"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <path d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM7.82861 6.28582C8.302 6.28582 8.68576 5.90206 8.68576 5.42868C8.68576 4.95529 8.302 4.57153 7.82861 4.57153C7.35523 4.57153 6.97147 4.95529 6.97147 5.42868C6.97147 5.90206 7.35523 6.28582 7.82861 6.28582ZM9.02857 10.3058H8.77143V7.73438C8.77143 7.40301 8.5028 7.13438 8.17143 7.13438H7.31429C6.98292 7.13438 6.71429 7.40301 6.71429 7.73438C6.71429 8.06575 6.98292 8.33438 7.31429 8.33438H7.57143V10.3487H7.31429C6.98292 10.3487 6.71429 10.6173 6.71429 10.9487C6.71429 11.28 6.98292 11.5487 7.31429 11.5487H9.02857C9.24293 11.5487 9.44101 11.4343 9.54819 11.2487C9.65537 11.063 9.65537 10.8343 9.54819 10.6487C9.44101 10.463 9.24293 10.3487 9.02857 10.3487V10.3058Z" fill="#5E739C"/></svg><span id="tooltipText">Vote to help us enhance this Beta version of AI Search</span></div>');

                    $('.AISearch-Col .Dropdown').prepend(firstElement);
                    $('.AISearch-Col .Dropdown').append(forthElement);

                    $input.focus();
                    AIsearchInitialized = true;
                }

                // adjustOwlDropdown();
            } else {
                elementsToShow.forEach(selector => {
                    const element = $(selector)[0];
                    if (element) {
                        element.style.display = "flex";
                    }
                });
                $('.AISearch-Col')[0].style.display = "none";
            }
        });

        //adjustOwlbot dropdown inside modal when dropdown is open
        function adjustOwlDropdown() {
            const label = $('.rm-OwlbotAI');
            const input = label.find('input');

            input.off('click').on('click', function(){
                // $('.AISearch-Col > .SearchBox')[0].style.display = "none";
                adjustOwlDropdownPosition();
                window.addEventListener('resize',  adjustOwlDropdownPosition);
            });
        }

        function adjustOwlDropdownPosition (){
            // $searchInput = $('.AISearch-Col .rm-OwlbotAI')[0];
            const $targetDiv = $('.AISearch-answer-wrapper')[0];

            const searchWidth = $targetDiv.getBoundingClientRect().width;

            $owlDropdown = $('#tippy-1, #tippy-2, #tippy-3, #tippy-4, #tippy-5');

            if($owlDropdown[0]) {
                $owlDropdown[0].style.width = searchWidth + "px";
            }
        }


        function toggleSearchModal() {
            if ($(".hub-search-results-active").length > 0) closeSearchModal();
            else openSearchModal();
        }
        function openSearchModal() {
            $("body").css("overflow", "hidden");
            $("#hub-search-results").addClass("hub-search-results-active");
            $('.progress-bar').css('z-index', '99');

            if ($('#toggle-AI-mode').is(':checked')) {
                $('.CustomSearch_withSidebar > .right-nav')[0].style.display = "none";
                $('.AISearch-Col #SearchBert').focus();
                $('.AISearch-Col #SearchBert').val('');
                $('.AISearch-Col #SearchBert').attr('value', '');
            } else {
                $('.CustomSearch_withSidebar > .right-nav')[0].style.display = "flex";
                $('.SearchBox-Input').focus();
            }

            // do not display AI toggle when owlbot is not on
            if (window.location.href.includes('?owlbotTrial=true')) {
                $('.AI-mode')[0].style.display = "none";
            }
        }
        function closeSearchModal() {
            //console.log("close");
            $("#hub-search-results").removeClass("hub-search-results-active");
            $("body").css("overflow", "");
            $('.progress-bar').css('z-index', '1000');
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
        const searchTabs = ['All', 'Guides', 'Recipes', 'Reference', 'Center', 'Changelog', 'Pages'];
        let currentSearchTab = 'All';
        $(".SearchBox-Input").on('input', function () {
            if (useAutocompletionFeature) debounce(getSearchAutocompletions, 1, searchDebouncingTime);
            else debounce(getSearchResults, 1, searchDebouncingTime);

            //if ($(this).val() !== '') $('.SearchBox-enter').css('right', '40px');
            //else $('.SearchBox-enter').css('right', '9px');
        });

        // Brand filtering (Content, Discovery, Engagement)

        // Get current pillar from URL
        const currentUrlPath = window.location.pathname;
        const currentPillar = currentUrlPath.match(/^\/([^\/?#]+)/)[1];

        // Apply pre-set filter initially on current pillar
        $("input[type='checkbox'].Toggle-input").each(function() {
            var label = (this.getAttribute('label') || '').toLowerCase();
            if(label === String(currentPillar)) {
                this.checked = true;
                filtersActive.push(label);
            }
        });
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
                url: `https://suggest.dxpapi.com/api/v2/suggest/`,

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
            // Required for the boost parameter of Search API
            const title_sentenceCase = searchQuery.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, char => char.toUpperCase());
            const title_titleCase = searchQuery.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());

            const filterQueryBrand = filtersActive.length
                ? 'brand:' + filtersActive.map(filter => `"${filter.toLowerCase()}"`).join(' OR ') + 'OR "general"' : '""';

            let categoryActive;
            switch (currentSearchTab) {
                case 'Guides': categoryActive = 'guide'; break;
                case 'Recipes': categoryActive = 'recipe'; break;
                case 'Reference': categoryActive = 'reference'; break;
                case 'Center': categoryActive = 'zendesk'; break;
                case 'Changelog': categoryActive = 'changelog'; break;
                case 'Pages': categoryActive = 'customPage'; break;
                case 'All': default: categoryActive = null; break;
            }
            const filterQueryCategory = categoryActive
                ? 'category2:' + `"${categoryActive}"` : '""';

            if (debuggingMode) console.time('⏱️ API request: ');
            ajaxSearchRequest = $.ajax({
                method: 'GET',
                data: {
                    account_id: '6276',
                    search_type: 'keyword',
                    domain_key: 'bloomreach_devdocs',
                    fl: 'pid,title,brand,url,description,category2',
                    fq: [filterQueryBrand, filterQueryCategory],
                    q: searchQuery,
                    request_type: 'search',
                    rows: resultsPerPage,
                    start: (page - 1) * resultsPerPage,
                    search_td: '',
                    url: 'https://documentation.bloomreach.com',
                    boost: 'title:"' + title_sentenceCase + '" OR "' + title_titleCase + '"',
                },
                traditional: true, // Required for `fq: [filterQueryBrand, filterQueryCategory],` to work properly
                url: `https://core.dxpapi.com/api/v1/core/`,

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
    },500);
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
      <h6 level="6" text="Title" class="Title  Title6 ">Try a different keyword</h6>
      <div>No results found for ‘${searchQuery}’</div>
	  <div class="AI-toggle">                  
                    <input class="AI-mode-btn" type="checkbox" id="toggle-AI-mode">
                    <label class="AI-mode-label-white" for="toggle-AI-mode">
                    <span class="AI-mode-span" style="color: #00B2DB;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M8.30994 2.5801C8.37011 2.39646 8.62989 2.39646 8.69006 2.5801L10.0725 6.79967C10.0924 6.86019 10.1398 6.90764 10.2003 6.92746L14.4199 8.30994C14.6035 8.37011 14.6035 8.62989 14.4199 8.69006L10.2003 10.0725C10.1398 10.0924 10.0924 10.1398 10.0725 10.2003L8.69006 14.4199C8.62989 14.6035 8.37011 14.6035 8.30994 14.4199L6.92746 10.2003C6.90764 10.1398 6.86019 10.0924 6.79967 10.0725L2.5801 8.69006C2.39646 8.62989 2.39646 8.37011 2.5801 8.30994L6.79967 6.92746C6.86019 6.90764 6.90764 6.86019 6.92746 6.79967L8.30994 2.5801Z" fill="#00B2DB"/>
<path d="M2.5 1L2.87017 2.12983L4 2.5L2.87017 2.87017L2.5 4L2.12983 2.87017L1 2.5L2.12983 2.12983L2.5 1Z" fill="#00B2DB"/>
</svg>
                  Ask AI</span>
                </label>
              </div>
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
      <i class="icon icon-search1"></i>
      <h6 level="6" text="Title" class="Title  Title6 ">${useAutocompletionFeature
        ? 'Search our documentation by keyword'
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

    if (brand === 'General') {
        setTimeout(function() {
            $(".SearchResults-Result-Project").each(function() {
                if ($(this).text().trim() === 'General') {
                    $(this).css("display", "none");
                }
            });
        }, 5);
    }

    let icon = 'missing'
    if (category2 === 'guide') icon = 'guides'
    else if (category2 === 'recipe') icon = 'recipes'
    else if (category2 === 'reference') icon = 'references'
    else if (category2 === 'zendesk') icon = 'help-center'
    else if (category2 === 'changelog') icon = 'changelog'
    else if (category2 === 'customPage') icon = 'custom-pages-2'

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
<!--                <div class="AI-toggle">                  -->
<!--                    <input class="AI-mode-btn" type="checkbox" id="toggle-AI-mode">-->
<!--                    <label class="AI-mode-label" for="toggle-AI-mode">-->
<!--                    <span class="AI-mode-span">-->
<!--                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">-->
<!--  <path d="M1.40568 3.74292C1.41773 3.75401 1.4297 3.76519 1.4416 3.77644C1.48856 3.8209 1.53436 3.86669 1.57881 3.91366C1.59007 3.92555 1.6013 3.93758 1.61239 3.94963C1.80589 4.15985 1.97412 4.39379 2.11259 4.64696C2.28008 4.95321 2.71992 4.95321 2.88741 4.64696C3.02588 4.39379 3.19411 4.15985 3.3876 3.94963C3.3987 3.93758 3.40987 3.92561 3.42113 3.91372C3.46558 3.86675 3.51137 3.82096 3.55834 3.7765C3.57023 3.76525 3.58227 3.75401 3.59432 3.74292C3.80453 3.54942 4.03847 3.38119 4.29165 3.24273C4.59789 3.07524 4.59789 2.6354 4.29165 2.4679C4.03847 2.32944 3.80453 2.16121 3.59431 1.96771C3.58226 1.95662 3.57029 1.94544 3.5584 1.93419C3.51144 1.88973 3.46564 1.84394 3.42119 1.79698C3.40993 1.78508 3.3987 1.77305 3.3876 1.761C3.19411 1.55078 3.02588 1.31684 2.88741 1.06367C2.71992 0.757423 2.28008 0.757423 2.11259 1.06367C1.97412 1.31684 1.80589 1.55079 1.61239 1.761C1.6013 1.77305 1.59013 1.78502 1.57887 1.79691C1.53442 1.84388 1.48862 1.88968 1.44166 1.93413C1.42977 1.94539 1.41773 1.95662 1.40568 1.96771C1.19547 2.16121 0.961525 2.32944 0.708353 2.4679C0.402106 2.6354 0.402107 3.07524 0.708354 3.24273C0.961524 3.38119 1.19547 3.54942 1.40568 3.74292Z" fill="white"/>-->
<!--  <path d="M10.0967 1.79741C9.62256 0.930481 8.37746 0.930487 7.90332 1.79742L6.42929 4.49257C6.13105 5.03788 5.68269 5.48624 5.13737 5.78449L2.44222 7.25851C1.57529 7.73265 1.57529 8.97776 2.44222 9.4519L5.13737 10.9259C5.68269 11.2242 6.13105 11.6725 6.42929 12.2178L7.90332 14.913C8.37746 15.7799 9.62257 15.7799 10.0967 14.913L11.5707 12.2178C11.869 11.6725 12.3173 11.2242 12.8627 10.9259L15.5578 9.4519C16.4247 8.97776 16.4247 7.73265 15.5578 7.25851L12.8627 5.78448C12.3173 5.48624 11.869 5.03788 11.5707 4.49256L10.0967 1.79741ZM7.74532 5.21233L9.00001 2.91822L10.2547 5.21233C10.6906 6.00933 11.3459 6.66462 12.1429 7.10052L14.437 8.35521L12.1429 9.60989C11.3459 10.0458 10.6906 10.7011 10.2547 11.4981L9.00001 13.7922L7.74532 11.4981C7.30943 10.7011 6.65414 10.0458 5.85713 9.60989L3.56303 8.35521L5.85713 7.10052C6.65413 6.66462 7.30943 6.00933 7.74532 5.21233Z" fill="white"/>-->
<!--                        </svg>-->
<!--                  Ask AI</span>-->
<!--                </label>-->
<!--              </div>-->
              <input autofocus autocapitalize="off" autocomplete="off" autocorrect="off" type="search" value="" placeholder="Search"
                spellcheck="false" tabindex="0" class="Input Input_md Input_touched SearchBox-Input"
              >
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
                <div aria-label="Center" aria-selected="false" class="SearchTabs-Tab Tabs-listItem " role="tab" tabindex="-1">
                  <span class="SearchTabs-Tab"><i class="icon icon-help-center"></i>Help Center</span>
                </div>
                <div aria-label="Changelog" aria-selected="false" class="SearchTabs-Tab Tabs-listItem " role="tab" tabindex="-1">
                  <span class="SearchTabs-Tab"><i class="icon icon-changelog"></i>What's New</span>
                </div>
                <div aria-label="Pages" aria-selected="false" class="SearchTabs-Tab Tabs-listItem " role="tab" tabindex="-1">
                  <span class="SearchTabs-Tab"><i class="icon icon-custom-pages-2"></i>Pages</span>
                </div>
              </div>
            </div>
            <div class="SearchResults"></div>
          </div>
          <div class="AISearch-Col" style="display: none">
            <div class="AISearch-answer-wrapper SearchBert-owlbotContainer3btgDGGh1J7d">    
            </div>         
            <div class="AISearch-answer-history-wrapper SearchBert-hist-owlbotContainer3btgDGGh1J7d">            
            </div>
           <div class="SearchBox">            
                <i class="icon icon-search1"></i>
                <h6 level="6" text="Title" class="Title  Title6 "> Need help? Type in your query and let our AI assist you </h6>
            </div>
          </div>
          <div class="right-nav">
            <details class="RefinementList-Col" open="">
              <summary class="RefinementList-Header" tabindex="-1">Product</summary>
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
                <li class="RefinementList-Item1">
                  <label class="Toggle Toggle_checkbox RefinementList-Toggle">
                    <input class="Toggle-input" label="Data hub" type="checkbox">
                      <div class="Toggle-display">
                        <i class="Toggle-display-icon icon-check-heavy"></i>
                        <i class="Toggle-display-icon icon-minus-heavy"></i>
                      </div>
                    <span class="Toggle-label" title="Data hub">Data hub</span>
                  </label>
                </li>
                <li class="RefinementList-Item1">
                  <label class="Toggle Toggle_checkbox RefinementList-Toggle">
                    <input class="Toggle-input" label="Content Saas" type="checkbox">
                      <div class="Toggle-display">
                        <i class="Toggle-display-icon icon-check-heavy"></i>
                        <i class="Toggle-display-icon icon-minus-heavy"></i>
                      </div>
                    <span class="Toggle-label" title="Content Saas">Content Saas</span>
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
    description = description?.replace(/\n/g, "\\n"); // Stringify new lines
    description = description?.replace(/block:.*?\/block\]/g, ''); // Remove special blocks
    description = description?.replace(/\]\(.*?\)/g, '').replace(/\[/g, ''); // Remove links
    description = description?.replace(/[*_#<>|]/g, ''); // Remove styles
    description = description?.replace(/--+/g, ''); // Remove '---------'
    const sectionsFound = description?.split('\\n').filter(section => section.length > 10)
        .map(i => i.trim().replace(/^-\s*/, "")); // Remove white space & bulletpoints

    // Find section with highest number of matches
    let bestMatch = sectionsFound?.length > 0 ? sectionsFound[0] : title;
    let bestMatchesCount = 0;
    const keywords = searchQuery.split(' ');
    sectionsFound?.forEach(section => {
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

function replaceStarWithSVG() {
    const starChar = '✨';
    const svgString = `<span class="loomi-tooltip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16.767" height="20.315" viewBox="0 0 16.767 20.315" style="display: inline-block; position: relative; top: -10px;"><defs><linearGradient id="a" x1="1.234" y1="0.896" x2="0.208" y2="0.451" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#d8ea00"/><stop offset="1" stop-color="#00b2db"/></linearGradient></defs><g transform="translate(-230.812 -596.903)"><path d="M13.355,7.492h0a.358.358,0,0,0,.032-.709A7.293,7.293,0,0,1,7.492.324.358.358,0,0,0,6.783.292a7.293,7.293,0,0,1-6.459,5.9A.358.358,0,0,0,.292,6.9a7.293,7.293,0,0,1,5.9,6.459.358.358,0,0,0,.709.032,7.293,7.293,0,0,1,6.459-5.9" transform="matrix(0.995, 0.105, -0.105, 0.995, 233.975, 602.184)" fill="url(#a)"/><path d="M69.289,3.24h0a.194.194,0,0,0-.065-.378A3.947,3.947,0,0,1,65.356.135.194.194,0,0,0,64.977.2,3.947,3.947,0,0,1,62.25,4.068a.194.194,0,0,0,.065.379,3.946,3.946,0,0,1,3.868,2.727.194.194,0,0,0,.379-.065A3.947,3.947,0,0,1,69.289,3.24" transform="translate(168.697 596.902)" fill="url(#a)"/></g></svg><span class="loomi-tooltiptext">Powered by Loomi AI</span></span>`;

    $('main *:contains("' + starChar + '")').each(function () {
        var mainElement = $(this);
        var mainHTML = mainElement.html();
        if (mainHTML.indexOf(starChar) > -1 && mainHTML.indexOf('loomi-wrapper') === -1) {
            var wrappedHTML = mainHTML.replace(new RegExp('>([^<]*?)(' + starChar + '[^<]*?)<', 'g'),
                '><span class="loomi-wrapper">$1<span class="loomi-fade-out">$2</span></span><');
            mainElement.html(wrappedHTML);

            $('.loomi-fade-out').css('opacity', '1').animate({opacity: 0}, 500, function () {
                //setTimeout(function () {
                var textContent = $(this).html();
                var updatedHTML = textContent.split(starChar).join(svgString);
                //
                $(this).html(updatedHTML).removeClass('loomi-fade-out').addClass('loomi-fade-in').css('opacity', '0').animate({opacity: 1}, 500);
                //}, 400);
            });
        }
    });
}

// Add demo button to menu
$(window).on('pageLoad', () => {
    let navDemoButton = `
        <div class="navbar-demo-button">
            <a href="https://www.bloomreach.com/en/request-demo" role="button" class="btn btn-nav" target="_blank">
                <span class="">Get a Demo</span>
            </a>
        </div>
    `;

    if ( $("#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .navbar-demo-button").length === 0) {
        $("#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU").append(navDemoButton);
    }

    $("#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU button.menu3d6DYNDa3tk5").off('click').on('click', function () {
        setTimeout(function() {
            if ( $("#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .Flyout_overlay1M3UuWE_hk3r .rm-Flyout .navbar-demo-button").length === 0) {
                $("#ssr-main .rm-Header .rm-Header-top .Header-leftADQdGVqx1wqU .Flyout_overlay1M3UuWE_hk3r .rm-Flyout").append(navDemoButton);
            }
        }, 200);
    });
});

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        // Pre každý pridaný alebo odstránený uzol v mutácii
        mutation.addedNodes.forEach((node) => {
            handleNode(node);
        });
        mutation.removedNodes.forEach((node) => {
            handleNode(node);
        });
    });
});

function handleNode(node) {
    try {
        const parentNode = node.parentNode;
        if (parentNode && !parentNode.contains(node)) {
            parentNode.removeChild(node);
        }
    } catch (error) {
        console.error("Chyba pri odstraňovaní uzla:", error);
    }
}

observer.observe(document, {
    childList: true,
    subtree: true,
});

//start - add provide feedback button
$(document).ready(function() {
    function addProvideFeedback(){
        if ($('.rm-PageThumbs').length > 0) {
            // Create the parent div element
            const feedbackDiv = $('<div>', {
                class: 'provide-feedback-container'
            });

            // Create the span element with text
            const spanText = $('<span>', {
                text: 'Or share your feedback at'
            });

            // Create the mailto link element
            const mailLink = $('<a>', {
                href: 'mailto:docs@bloomreach.com',
                text: 'docs@bloomreach.com',
                class: 'provide-feedback'
            });

            // Append the span and mailto link to the parent div
            feedbackDiv.append(spanText).append(mailLink);

            $('.rm-PageThumbs').append(feedbackDiv);

        }
    }
    setInterval(function(){
        if ($('.provide-feedback-container').length === 0 && $('.rm-PageThumbs').length > 0 ) {
            addProvideFeedback();
        }
    }, 100);
});
//end - provide feedback button

// active link in header when 404 page is loaded - START
$(document).ready(() => {
    const titleText = document.title.toLowerCase();

    if (titleText.includes('404')) {
        $('#ssr-main .rm-Header .rm-Container .rm-Header-bottom-link.active').css('pointer-events', 'auto');
    }
});
// active link in header when 404 page is loaded - END