package selenium.tests;

import io.github.bonigarcia.wdm.ChromeDriverManager;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

public class WebTest {
    private static WebDriver driver;

    @BeforeClass
    public static void setUp() throws Exception {
        //driver = new HtmlUnitDriver();
        ChromeDriverManager.getInstance().setup();
        driver = new ChromeDriver();
    }

    @AfterClass
    public static void tearDown() throws Exception {
        driver.close();
        driver.quit();
    }


    @Test
    public void googleExists() throws Exception {
        driver.get("http://www.google.com");
        assertEquals("Google", driver.getTitle());
    }


    @Test
    public void Closed() throws Exception {
        driver.get("http://www.checkbox.io/studies.html");

        // http://geekswithblogs.net/Aligned/archive/2014/10/16/selenium-and-timing-issues.aspx
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@class='status']/span[.='CLOSED']")));
        List<WebElement> spans = driver.findElements(By.xpath("//a[@class='status']/span[.='CLOSED']"));

        assertNotNull(spans);
        assertEquals(5, spans.size());
    }

    @Test
    public void participantCount() throws Exception {
        driver.get("http://www.checkbox.io/studies.html");
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@class='status']/span[.='CLOSED']")));
        List<WebElement> values = driver.findElements(By.xpath("//*[text()[contains(.,'Frustration of Software Developers')]]/ancestor::div[contains(@class,'row')]/div[@class='span4']/p/span"));

        //System.out.println(values.get(0).getText());
        assertNotNull(values);
        assertEquals(values.get(0).getText().trim().compareToIgnoreCase("55"), 0);
        //$x("//*[text()[contains(.,'Program Comprehension Exercise')]]/ancestor::div[contains(@class,'row')]/div[@class='span4']/p/span/text()")[0]
        //$x("//*[@class='row']/div[position()=2]/a/span/text()[contains(.,'OPEN')]")
        //$x("//*[@class='row']/div[position()=2]/a/span/text()[contains(.,'OPEN')]/../../..//button").length
        //$x("//*[@class='row']/div[position()=2]/a/span/text()[contains(.,'OPEN')]/ancestor::div[@class='span4']//button")
        //$x("//*[text()[contains(.,'Software Changes Survey')]]/ancestor::div[contains(@class,'row')]//span/text()[contains(.,'Amazon')]")
        //assertNotNull(element);
    }

    @Test
    public void openClickable() throws Exception {
        driver.get("http://www.checkbox.io/studies.html");

        // http://geekswithblogs.net/Aligned/archive/2014/10/16/selenium-and-timing-issues.aspx
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@class='status']/span[.='OPEN']")));
        List<WebElement> spans = driver.findElements(By.xpath("//a[@class='status']/span[.='OPEN']"));
        List<WebElement> buttons = driver.findElements(By.xpath("//a[@class='status']/span[.='OPEN']/ancestor::div[@class='span4']//button[text()='Participate']"));

        assertNotNull(buttons);
        assertNotNull(spans);
        assertEquals(buttons.size(), spans.size());
    }

    @Test
    public void checkAmazon() throws Exception {
        driver.get("http://www.checkbox.io/studies.html");

        // http://geekswithblogs.net/Aligned/archive/2014/10/16/selenium-and-timing-issues.aspx
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@class='status']/span[.='CLOSED']")));
        List<WebElement> amazonOffers = driver.findElements(By.xpath("//*[text()[contains(.,'Software Changes Survey')]]/ancestor::div[contains(@class,'row')]//img[@src='/media/amazongc-micro.jpg']"));

        assertNotNull(amazonOffers);
        assertEquals(amazonOffers.size(), 1);
    }

}
