import {getCurrentYear, getFooterCopy, getLatestNotification} from "./utils";


test("current year", () => {
    const currentYear = getCurrentYear();
    expect(currentYear).toBe(2025);
});

test("correct string", () => {
    let footerCopy = getFooterCopy(true);
    expect(footerCopy).toBe("Holberton School");

    footerCopy = getFooterCopy(false);
    expect(footerCopy).toBe("Holberton School main dashboard");
});

test("check return string", () => {
    const latestNotification = getLatestNotification();

    expect(latestNotification).toBe(
        "<strong>Urgent requirement</strong> - complete by EOD"
    );
});
