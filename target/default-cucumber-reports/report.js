$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Anouncement.feature");
formatter.feature({
  "name": "As a user I should be able to send anouncements from Anouncement subheading from \"More\" under the Activity Stream",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@announcement"
    }
  ]
});
formatter.scenarioOutline({
  "name": "\u003cusername\u003e should be able to upload files, add users and recepients, attach links, insert videos,",
  "description": "  create a quote, add mention, click on Visual editor, click on Topic icon, record video, add tags.",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters credentials \"\u003cusername\u003e\" username and \"\u003cpassword\u003e\" password",
  "keyword": "When "
});
formatter.step({
  "name": "user enters dashpage",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on more button",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on announcement",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on upload icon",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on upload files and images",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on select Documents From Bitrix24",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on downloadFromExternalDriveOffice365",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on create Using Google Docs Document",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on add more and clicks on recents, employees and departments and email users",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "hr4@cybertekschool.com ",
        "UserUser"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user logs in on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.bitrix.step_definitions.AnouncementStepDefinitions.user_logs_in_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "hr4@cybertekschool.com  should be able to upload files, add users and recepients, attach links, insert videos,",
  "description": "  create a quote, add mention, click on Visual editor, click on Topic icon, record video, add tags.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@announcement"
    }
  ]
});
formatter.step({
  "name": "user enters credentials \"hr4@cybertekschool.com \" username and \"UserUser\" password",
  "keyword": "When "
});
formatter.match({
  "location": "com.bitrix.step_definitions.AnouncementStepDefinitions.user_enters_credentials_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters dashpage",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitrix.step_definitions.ActiveStreamStepDefinitions.user_enters_dashpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on more button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitrix.step_definitions.AnouncementStepDefinitions.user_clicks_on_more_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on announcement",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitrix.step_definitions.AnouncementStepDefinitions.user_clicks_on_announcement()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d84.0.4147.135)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Desaras-MacBook-Pro.local\u0027, ip: \u00272601:140:8400:b010:0:0:0:dca2%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.135, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: /var/folders/pp/jt_g_rbs3tl...}, goog:chromeOptions: {debuggerAddress: localhost:50773}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 14c3df63f111e7a146bb2b715cd42aa8\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat com.bitrix.step_definitions.AnouncementStepDefinitions.user_clicks_on_announcement(AnouncementStepDefinitions.java:41)\n\tat ✽.user clicks on announcement(file:///Users/desarairinitrydub/IdeaProjects/bitrix/src/test/resources/features/Anouncement.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on upload icon",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitrix.step_definitions.AnouncementStepDefinitions.user_clicks_on_upload_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on upload files and images",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitrix.step_definitions.AnouncementStepDefinitions.user_clicks_on_upload_files_and_images()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on select Documents From Bitrix24",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitrix.step_definitions.AnouncementStepDefinitions.user_clicks_on_select_Documents_From_Bitrix24()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on downloadFromExternalDriveOffice365",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitrix.step_definitions.AnouncementStepDefinitions.user_clicks_on_downloadFromExternalDriveOffice365()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on create Using Google Docs Document",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitrix.step_definitions.AnouncementStepDefinitions.user_clicks_on_create_Using_Google_Docs_Document()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on add more and clicks on recents, employees and departments and email users",
  "keyword": "Then "
});
formatter.match({
  "location": "com.bitrix.step_definitions.AnouncementStepDefinitions.user_clicks_on_add_more_and_clicks_on_recents_employees_and_departments_and_email_users()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});