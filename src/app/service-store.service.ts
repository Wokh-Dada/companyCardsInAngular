import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceStoreService {

  preHeader = false;

  headText = [
    {
      logo: '',
      menuItemOne: 'PERSONAL',
      menuItemTwo: 'BUSINESS',
      menuOpen: '☰',
      menuClose: 'X',
      logIn: 'Log in',
      btnText: 'Start for free'
    }
  ]

  getheadText() {
    return this.headText;
  }

  headNav = [
    {nameLink: "Pricing", complited: false},
    {
      nameLink: "Product",
      complited: true,
      popup: [
        {
          popupTitle: "Features",
          popupTitleComplited: true,
          popupLinks: [
            {
              popupItemName: "Product tour",
              popupIcon: "public",
              popupIconComplited: true,
            },
            {
              popupItemName: "Account",
              popupIcon: "account_balance_wallet",
              popupIconComplited: true,
            },
            {
              popupItemName: "Payments",
              popupIcon: "swap_horiz",
              popupIconComplited: true
            },
            {
              popupItemName: "Company cards",
              popupIcon: "credit_card",
              popupIconComplited: true,
            },
            {
              popupItemName: "Roles & Permissions",
              popupIcon: "https",
              popupIconComplited: true,
            },
            {
              popupItemName: "Mobile app",
              popupIcon: "stay_primary_portrait",
              popupIconComplited: true,
            },
            {
              popupItemName: "Security",
              popupIcon: "security",
              popupIconComplited: true,
            },
            {
              popupItemName: "Perks",
              popupIcon: "card_giftcard",
              popupIconComplited: true,
            },
          ]
        },
        {
          popupTitle: "Solutions",
          popupTitleComplited: true,
          popupLinks: [
            {
              popupItemName: "For accountants",
              popupIcon: "event_note",
              popupIconComplited: true,
            }
          ]
        }
      ]
    },
    {
      nameLink: "Resources",
      complited: true,
      popup: [
        {
          popupTitle: "",
          popupTitleComplited: false,
          popupLinks: [
            {
              popupItemName: "Blog",
              popupIcon: "",
              popupIconComplited: false,
            },
            {
              popupItemName: "Community",
              popupIcon: "",
              popupIconComplited: false,
            },
            {
              popupItemName: "Help centre",
              popupIcon: "",
              popupIconComplited: false,
            },
            {
              popupItemName: "Webinar",
              popupIcon: "",
              popupIconComplited: false,
            }
          ]
        }

      ]
    },
    {
      nameLink: "Company",
      complited: true,
      popup: [
        {
          popupTitle: "",
          popupTitleComplited: false,
          popupLinks: [
            {
              popupItemName: "About",
              popupIcon: "",
              popupIconComplited: false,
            },
            {
              popupItemName: "Careers",
              popupIcon: "",
              popupIconComplited: false,
            },
            {
              popupItemName: "Affiates",
              popupIcon: "",
              popupIconComplited: false,
            },
            {
              popupItemName: "Contact cards",
              popupIcon: "",
              popupIconComplited: false,
            }
          ]
        }
      ]
    }
  ]

  getheadNav() {
    return this.headNav;
  }

  productPresentation = {
    videoScr: 'https://assets.revolut.com/media/business/corporate-cards/hero_slider.mp4',
    productPresentationContent: [
      {
        title: 'Radically better company cards',
        subtitle: 'No-fuss company cards for team members, instant virtual cards for security and flexibility — all set up with our easy expense management',
        btnText: 'Start for free'
      }
    ]
  }

  getproductPresentation() {
    return this.productPresentation;
  }

  multiCurrencySlaider = ''

  personalSecurity = {
    personalSecurityImg: 'https://assets.revolut.com/media/business/corporate-cards/features/feature-cards.png',
    title: 'Stay in control over your cards and transactions',
    list: {
      text: [
        {text: 'Order physical cards for your team and create multiple virtual cards instantly'},
        {text: 'Link several  multi-currency accounts to one card or connect multiple cards to a single account'},
        {text: 'Set monthly limits and get statements with transactions for each card separately'},
        {text: 'Easily track transactions and control cards activity by employees, including automated notifications'}
      ]
    }
  }

  getppersonalSecurity() {
    return this.personalSecurity;
  }

  expenseManagement = {
    expenseManagementImg: 'https://assets.revolut.com/media/business/corporate-cards/features/feature-cards.png',
    title: 'Eliminate stress from accounting with expense management',
    list: {
      text: [
        {text: 'Card holders can upload receipts and choose categories in the mobile app, as well as receive automatic reminders about missing information'},
        {text: 'Accountants and administrators can instantly review expenses in a live feed and reject or approve them'},
        {text: 'Organise expenses with categories and tax rates. Import details from Xero or define them manually'},
        {text: 'Export your expenses as a .csv file to be used on your accounting platform of choice'}
      ]
    }
  }

  getexpenseManagement() {
    return this.expenseManagement;
  }

  securityControl = {
    securityControlImg: 'https://assets.revolut.com/media/business/corporate-cards/features/feature-security.svg',
    title: 'Control the security of your company cards',
    list: {
      text: [
        {text: 'Temporarily freeze missing cards in your app or web dashboard'},
        {text: 'Enable location-based security to reduce fraudulent transactions'},
        {text: 'Disable contactless, online or swipe payments when necessary to ensure your card’s safety'},
        {text: 'Toggle the ability to make cash withdrawals from ATMs for extra security'}
      ]
    }
  }
  getsecurityControl() {
    return this.securityControl;
  }

  cardDesign = {
    cardDesignImgWhite: 'https://assets.revolut.com/media/business/businesscard_white.jpg',
    cardDesignImgBlack: 'https://assets.revolut.com/media/business/businesscard_black.jpg',
    title: 'Exclusive business card designs',
    subtitle: 'Choose from our exclusive business card designs.'
  }
  getcardDesign() {
    return this.cardDesign;
  }

  clauseMatch = {
    clauseMatchImg: 'https://assets.revolut.com/media/business/corporate-cards/testimonial.png',
    blockName: 'clausematch',
    title: 'At ClauseMatch we’ve had a positive experience using Revolut Business.',
    blockContent: 'The possibility to track and manage employee expenses on a single dashboard makes it a very convenient tool for business use.',
    author: 'Andrey Dokuchaev',
    company: 'COO & Co-Founder'
  }
  getclauseMatch() {
    return this.clauseMatch;
  }

  otherFeatures = {
    title: 'Other features coming soon',
    featuresblock: [
      {
        title: 'Disposable virtual cards',
        text: 'Make one-off payments with a virtual card that will automatically terminate itself after use',
        class: 'other_end'
      },
      {
        title: 'Geographical restrictions',
        text: 'Restrict transactions based on selected countries so spending is only possible during business trips or in your home country',
        class: 'other_start'
      },
      {
        title: 'Custom design for cards',
        text: 'Create cards for your team which reflect the personality and identity of your business',
        class: 'other_end'
      },
      {
        title: 'Advanced spending limits',
        text: 'Set up permanent or temporary card limits per transaction and on daily spend',
        class: 'other_start'
      }
    ]
  }

  getotherFeatures() {
    return this.otherFeatures;
  }

  exploreFeatures = {
    title: 'Explore our other features',
    exploreFeaturesblock: [
      {
        title: 'Perks',
        text: 'Benefits and discounts from partners who can take your business further',
        class: 'Pink',
        icon: 'redeem'
      },
      {
        title: 'Security',
        text: 'Your funds are safeguarded and data is encrypted and secure',
        class: 'Gray',
        icon: 'security'
      },
      {
        title: 'Accounts',
        text: 'Open multiple accounts in 30 currencies',
        class: 'Orange',
        icon: 'account_balance_wallet'
      }
    ]
  }
  getexploreFeatures() {
    return this.exploreFeatures;
  }

  linkBlock = {
    title: 'Exclusive business card designs',
    subtitle: 'Choose from our exclusive business card designs.',
    btnText: 'Start for free'
  }
  getlinkBlock() {
    return this.linkBlock;
  }

  previewBackground = {
    previewBackgroundBlock: [
      {
        class: 'one',
      },
      {
        class: 'two',
      },
      {
        class: 'three',
      },
      {
        class: 'four',
      }
    ]
  }

  getpreviewBackground() {
    return this.previewBackground;
  }




  constructor() { }
}
