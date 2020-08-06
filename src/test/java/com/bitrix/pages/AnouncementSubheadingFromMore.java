package com.bitrix.pages;

import com.bitrix.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AnouncementSubheadingFromMore {

    public AnouncementSubheadingFromMore(){ PageFactory.initElements(Driver.getDriver(), this); }

    @FindBy (xpath = "//div[@id='divoPostFormLHE_blogPostForm']/div[3]/div[2]/span[1]")
    public  WebElement uploadButton;


    @FindBy (id = "feed-add-post-form-link-text")
    public WebElement moreButton;

    @FindBy (xpath = "//span[@class='menu-popup-item menu-popup-no-icon feed-add-post-form-important feed-add-post-form-important-more ']")
    public WebElement announcements;

    @FindBy (xpath = "//span[@class=\'bxhtmled-top-bar-btn bxhtmled-button-link\']")
    public WebElement linkIcon;

    @FindBy (xpath = "//input[@id='linkidPostFormLHE_blogPostForm-text']")
    public WebElement linkText;

    @FindBy (xpath = "linkidPostFormLHE_blogPostForm-href")
    public  WebElement linkURL;

    @FindBy (xpath = "//input[@value='Save']")
    public WebElement saveLinkButton;

    @FindBy (linkText = "//a[text()='Add more']")
    public WebElement addMore;

    @FindBy (xpath = "//div[@class='bx-finder-box-tabs']/a[1]")
    public  WebElement recent;

    @FindBy (xpath = "//div[@class='bx-finder-box-tabs']/a[2]")
    public WebElement EmployeesAndDepartments;




}
