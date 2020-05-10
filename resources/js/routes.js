import demo from './pages/Demo';
import landing from './pages/Landing';
import dashboard from './pages/Dashboard';
import signIn from './pages/SignIn';
import signUp from './pages/SignUp';
import reset from './pages/Reset';
import lock from './pages/Lock';
import oneTimePassword1 from './pages/OneTimePassword1';
import oneTimePassword2 from './pages/OneTimePassword2';
import buySell from './contents/dashboard/BuySell';
import home from './contents/dashboard/Home';
import dashboardPageTitle from './components/dashboard/PageTitle';
import addBankAcc from './contents/dashboard/AddBankAcc';
import accounts from './contents/dashboard/Accounts';
import history from './contents/dashboard/History';
import termCondition from './contents/landing/TermCondition';
import privacyPolicy from './contents/landing/PrivacyPolicy';
import landingIntro from './contents/landing/Intro';
import market from './contents/landing/Market';
import features from './contents/landing/Features';
import portfolio from './contents/landing/Portfolio';
import testimonial from './contents/landing/Testimonial';
import contact from './contents/landing/Contact';
import landingPageTitle from './components/landing/PageTitle';
import about from './contents/landing/About';
import settings from './contents/dashboard/settings/Settings';
import profile from './contents/dashboard/settings/Profile';
import preferences from './contents/dashboard/settings/Preferences';
import security from './contents/dashboard/settings/Security';
import linkedAccount from './contents/dashboard/settings/LinkedAccount';
import verifyStep1 from './contents/dashboard/VerifyStep1';
import verifyStep2 from './contents/dashboard/VerifyStep2';
import verifyStep3 from './contents/dashboard/VerifyStep3';
import verifyStep4 from './contents/dashboard/VerifyStep4';
import verifyStep5 from './contents/dashboard/VerifyStep5';
import verifyStep6 from './contents/dashboard/VerifyStep6';
import addDebitCard from './contents/dashboard/AddDebitCard';
import demoIntro from './contents/demo/Intro';
import pages from './contents/demo/Pages';
import support from './contents/demo/Support';

export default [
    { path: '*', redirect: '/' },

    { path: '/', component: landing, children: [
        { path: '', components: { landingIntro, market, features, portfolio, testimonial, contact }},
        { path: 'about', meta: {title: 'About Us'}, components: { pageTitle: landingPageTitle, about }},
        { path: 'terms-of-service', meta: {title: 'Terms & Condition'}, components: { pageTitle: landingPageTitle, termCondition }},
        { path: 'privacy-policy', meta: {title: 'Privacy Policy'}, components: { pageTitle: landingPageTitle, privacyPolicy }},
    ]},

    { path: '/demo', component: demo, children: [
        { path: '', meta: {title: 'Demo'}, components: { demoIntro, pages, support }},
    ]},

    { path: '/sign-in', meta: {title: 'Sign-In'}, component: signIn },
    { path: '/sign-up', meta: {title: 'Sign-Up'}, component: signUp },
    { path: '/reset', meta: {title: 'Reset Password'}, component: reset },
    { path: '/otp-1', meta: {title: 'OTP Number'}, component: oneTimePassword1 },
    { path: '/otp-2', meta: {title: 'OTP Code'}, component: oneTimePassword2 },
    { path: '/lock', meta: {title: 'Locked'}, component: lock },

    { path: '/dashboard', component: dashboard, children: [
        { path: '', redirect: 'home' },
        { path: 'home', meta: {title: 'Dashboard'}, components: {default: home, dashboardPageTitle} },
        { path: 'buy-sell', meta: {title: 'Exchange'}, components: {default: buySell, dashboardPageTitle} },
        { path: 'accounts', meta: {title: 'Accounts'}, components: {default: accounts, dashboardPageTitle} },
        { path: 'history', meta: {title: 'History'}, components: {default: history, dashboardPageTitle} },
        { path: 'add-bank-acc', meta: {title: 'Add Bank Account'}, component: addBankAcc },
        { path: 'add-debit-card', meta: {title: 'Add Debit Card'}, component: addDebitCard },
        { path: 'verify-step-1', meta: {title: 'Verify ID'}, component: verifyStep1 },
        { path: 'verify-step-2', meta: {title: 'Upload ID'}, component: verifyStep2 },
        { path: 'verify-step-3', meta: {title: 'ID Verifying...'}, component: verifyStep3 },
        { path: 'verify-step-4', meta: {title: 'ID Verified'}, component: verifyStep4 },
        { path: 'verify-step-5', meta: {title: 'Recommendation'}, component: verifyStep5 },
        { path: 'verify-step-6', meta: {title: 'Success'}, component: verifyStep6 },

        { path: 'settings', components: {default: settings, dashboardPageTitle}, children: [
            { path: '', meta: {title: 'Edit Profile'}, component: profile },
            { path: 'preferences', meta: {title: 'Preferences'}, component: preferences },
            { path: 'security', meta: {title: 'Security'}, component: security },
            { path: 'linked-account', meta: {title: 'Linked Account'}, component: linkedAccount },
        ]},
    ]}
];
