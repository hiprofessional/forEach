export const answers = {
  "items": [
    {
      "owner": {
        "reputation": 3689,
        "user_id": 2251701,
        "user_type": "registered",
        "accept_rate": 83,
        "profile_image": "https://www.gravatar.com/avatar/f92fcfdeee27066ae0edab67c6a8290f?s=128&d=identicon&r=PG",
        "display_name": "Rameez Rami",
        "link": "https://stackoverflow.com/users/2251701/rameez-rami"
      },
      "is_accepted": true,
      "score": 150,
      "last_activity_date": 1597996287,
      "last_edit_date": 1597996287,
      "creation_date": 1506967669,
      "answer_id": 46531192,
      "question_id": 46527826,
      "content_license": "CC BY-SA 4.0",
      "body": "<p>You can solve your problem using child routes.</p>\n<p>See working demo at <a href=\"https://angular-multi-layout-example.stackblitz.io/\" rel=\"noreferrer\">https://angular-multi-layout-example.stackblitz.io/</a> or edit at <a href=\"https://stackblitz.com/edit/angular-multi-layout-example\" rel=\"noreferrer\">https://stackblitz.com/edit/angular-multi-layout-example</a></p>\n<p>Set your route like below</p>\n<pre><code>const appRoutes: Routes = [\n    \n    // Site routes goes here \n    { \n        path: '', \n        component: SiteLayoutComponent,\n        children: [\n          { path: '', component: HomeComponent, pathMatch: 'full'},\n          { path: 'about', component: AboutComponent }\n        ]\n    },\n    \n    // App routes goes here\n    { \n        path: '',\n        component: AppLayoutComponent, \n        children: [\n          { path: 'dashboard', component: DashboardComponent },\n          { path: 'profile', component: ProfileComponent }\n        ]\n    },\n\n    // no layout routes\n    { path: 'login', component: LoginComponent},\n    { path: 'register', component: RegisterComponent },\n    // otherwise redirect to home\n    { path: '**', redirectTo: '' }\n];\n\nexport const routing = RouterModule.forRoot(appRoutes);\n</code></pre>\n"
    },
    {
      "owner": {
        "reputation": 112,
        "user_id": 408565,
        "user_type": "registered",
        "profile_image": "https://www.gravatar.com/avatar/86472b68c13b4e4ee59577d9752821f0?s=128&d=identicon&r=PG",
        "display_name": "Cesar",
        "link": "https://stackoverflow.com/users/408565/cesar"
      },
      "is_accepted": false,
      "score": 0,
      "last_activity_date": 1557782647,
      "creation_date": 1557782647,
      "answer_id": 56120054,
      "question_id": 46527826,
      "content_license": "CC BY-SA 4.0",
      "body": "<p>You can solve the problem using ng-content + ViewChild injection of layout into each page component that uses that specific layout.</p>\n\n<p>Using the router for this common use case always seemed like a workaround to me. What you want is similar to Layouts in Asp.Net MVC or MasterPages in WebForm etc.</p>\n\n<p>After struggling with this I ended up with something like this:</p>\n\n<p>see working demo: <a href=\"https://stackblitz.com/edit/angular-yrul9f\" rel=\"nofollow noreferrer\">https://stackblitz.com/edit/angular-yrul9f</a></p>\n\n<p><strong>shared.component-layout.ts</strong></p>\n\n<pre><code>import { Component } from '@angular/core';\n\n@Component({\n  selector: 'shared-component-layout',\n  template: `\n  &lt;div *ngIf=\"!hideLayoutHeader\" style=\"font-size: 2rem;margin-bottom: 10px;\"&gt;\n    Layout title: {{layoutHeader}}\n    &lt;ng-content select=\".layout-header\"&gt;    \n    &lt;/ng-content&gt;\n  &lt;/div&gt;\n  &lt;ng-content select=\".layout-body\"&gt;\n  &lt;/ng-content&gt;\n  `\n})\nexport class SharedComponentLayout {\n  layoutHeader: string;\n  hideLayoutHeader: boolean;\n}\n\n</code></pre>\n\n<p><strong>page.component-base.ts</strong></p>\n\n<pre><code>import { Component, ViewChild } from '@angular/core';\nimport { SharedComponentLayout } from './shared.component-layout';\n\nexport abstract class PageComponentBase {\n    @ViewChild('layout') protected layout: SharedComponentLayout;\n}\n</code></pre>\n\n<p><strong>login.component.ts - without header</strong></p>\n\n<pre><code>import { Component } from '@angular/core';\nimport { PageComponentBase } from './page.component-base';\n\n@Component({\n  selector: 'login-component',\n  template: `\n  &lt;shared-component-layout #layout&gt;\n    &lt;div class=\"layout-body\"&gt;\n      LOGIN BODY\n    &lt;/div&gt;\n  &lt;/shared-component-layout&gt;\n  `\n})\nexport class LoginComponent extends PageComponentBase {\n\n  ngOnInit() {\n    this.layout.hideLayoutHeader = true;    \n  }\n}\n</code></pre>\n\n<p><strong>home.component.ts - with header</strong></p>\n\n<pre><code>import { Component } from '@angular/core';\nimport { PageComponentBase } from './page.component-base';\n\n@Component({\n  selector: 'home-component',\n  template: `\n  &lt;shared-component-layout #layout&gt;\n    &lt;div class=\"layout-body\"&gt;\n      HOME BODY\n    &lt;/div&gt;\n  &lt;/shared-component-layout&gt;\n  `\n})\nexport class HomeComponent extends PageComponentBase {\n\n  ngOnInit() {    \n    this.layout.layoutHeader = 'Home component header';\n  }\n}\n</code></pre>\n"
    },
    {
      "owner": {
        "reputation": 5537,
        "user_id": 776686,
        "user_type": "registered",
        "accept_rate": 67,
        "profile_image": "https://www.gravatar.com/avatar/ad6778d6b79837b3f1f6a58763c9b6aa?s=128&d=identicon&r=PG",
        "display_name": "user776686",
        "link": "https://stackoverflow.com/users/776686/user776686"
      },
      "is_accepted": false,
      "score": 3,
      "last_activity_date": 1547115588,
      "last_edit_date": 1547115588,
      "creation_date": 1547115050,
      "answer_id": 54126308,
      "question_id": 46527826,
      "content_license": "CC BY-SA 4.0",
      "body": "<p>There are cases where the layout and shared elements don't really match the routing structure, or some elements have to be hidden/shown depending on a per-route basis. For such cases I can think of the following strategies (let's take an example of <code>app-header-main</code> component - but it will apply to any shared page element obviously):</p>\n\n<h3>Inputs &amp; css classes</h3>\n\n<p>You can provide inputs or css classes to control the inner appearance of your shared elements, such as:</p>\n\n<ol>\n<li><code>&lt;app-header-main [showUserTools]=\"false\"&gt;&lt;/app-header-main&gt;</code></li>\n</ol>\n\n<p>or</p>\n\n<ol start=\"2\">\n<li><code>&lt;app-header-main class=\"no-user-tools\"&gt;&lt;/app-header-main&gt;</code> and then use :host(.no-user-tools) to show/hide what needs to be</li>\n</ol>\n\n<p>or</p>\n\n<ol start=\"3\">\n<li><p>at a route level (child or not):</p>\n\n<pre><code>{\n  path: 'home',\n  component: HomeComponent,\n  data: {\n    header: {showUserTools: true},\n  },\n},\n</code></pre></li>\n</ol>\n\n<p>And access it through <code>ActivatedRoute</code> like so: <code>this.route.data.header.showUserTools</code></p>\n\n<h3>TemplateRef input</h3>\n\n<p>Inside <code>app-header-main</code> component:</p>\n\n<p><code>@Input() rightSide: TemplateRef&lt;any&gt;;</code></p>\n\n<p>Input of type <code>TemplateRef&lt;any&gt;</code> where you could feed an <code>ng-template</code> element directly</p>\n\n<pre><code>&lt;app-header-main [rightSide]=\"rightside\"&gt;&lt;/app-header-main&gt;\n&lt;ng-template #rightside&gt;your content here&lt;/ng-template&gt;\n</code></pre>\n\n<h3>Named slot transclusion</h3>\n\n<p>You can author the app-header-main so that it uses named slot transclusion</p>\n\n<p>Inside of app-header-main template:</p>\n\n<p><code>&lt;ng-content select=\"[rightSide]\"&gt;&lt;ng-content&gt;</code></p>\n\n<p>Usage:</p>\n\n<pre><code>&lt;app-header-main class=\"no-user-tools\"&gt;\n  &lt;div rightSide&gt;your content here&lt;/div&gt;\n&lt;/app-header-main&gt;\n</code></pre>\n"
    },
    {
      "owner": {
        "reputation": 25157,
        "user_id": 8558186,
        "user_type": "registered",
        "profile_image": "https://www.gravatar.com/avatar/8af66bb1af6d1875a2dd7be9dd1c8d2b?s=128&d=identicon&r=PG&f=1",
        "display_name": "Eliseo",
        "link": "https://stackoverflow.com/users/8558186/eliseo"
      },
      "is_accepted": false,
      "score": 10,
      "last_activity_date": 1506959106,
      "creation_date": 1506959106,
      "answer_id": 46528980,
      "question_id": 46527826,
      "content_license": "CC BY-SA 3.0",
      "body": "<p>you can use child e.g.</p>\n\n<pre><code>const appRoutes: Routes = [\n    { path: '', component: MainComponent,\n        children:{\n            { path: 'home'  component:HomeComponent},\n            { path: 'about', component: AboutComponent},\n            { path: 'contact', component: ContactComponent},\n               ..others that share the same footer and header...\n\n        }\n    },\n    { path: 'login', component: LoginComponent },\n    { path: 'register', component: RegisterComponent },\n    { path: 'admin', component:AdminComponent, \n         children{\n            { path: 'dashboard', component: DashboardComponent },\n            { path: 'profile', component: ProfileComponent }\n               ..others that share the same footer and header...\n         }\n    }\n    { path: '**', redirectTo: '' }\n];\n</code></pre>\n\n<p>MainComponent and AdminComponent like</p>\n\n<pre><code>&lt;app-header-main&gt;&lt;/app-header-main&gt;\n&lt;router-outlet&gt;&lt;/router-outlet&gt;\n&lt;app-footer-main&gt;&lt;/app-footer-main&gt;\n</code></pre>\n\n<p>the post talk about separate in diferent files the routes</p>\n"
    }
  ],
  "has_more": false,
  "quota_max": 300,
  "quota_remaining": 281
};