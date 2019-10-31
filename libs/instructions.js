handleCopyIcons();

function handleCopyIcons() {
    var copyIcons = document.getElementsByClassName('instructionImageCopyIcon');
    for (var i = 0; i < copyIcons.length; i++) {
        var copyIcon = copyIcons[i];
        copyIcon.addEventListener('click', function (e) {
            var instructionImageTextElement = e.target.nextElementSibling;
            var source = instructionImageTextElement.textContent;
            var split = source.split(/\r?\n/);
            var newSource = '';
            split.forEach(function (line) {
                newSource += line.trim() + '\n';
            });

            if (newSource.indexOf('Source too large') > -1) {
                var largeSource = LZString.decompressFromEncodedURIComponent('C4S2BsFMAIBUAsQGdrOgQ2qCkBQuAHdAJ1AGMQiA7YJIiqgc2kgEcBXdcXAYiNJ' +
                    'AVqteiCbRGIAG6QUAW3RVO4aGQD2NYmpVqAZtDroGzAEaRgAd0iQq0fuUqLaAGhYcuALjfLoAE2TAimQwZpbWtlwq9oKONEiuSnJmxKgAdJCp0ABMAAypAKxecmIgcuxyBvR4uEbAai' +
                    'kARACC4IIwAFTtFmDwGAA6VOAazFTocpANGCgtbbxI7AQE9cCQvnYkDsJYAJ4Esl7RQk6utfWuJmrsVL4k267qmtquNth3fuiBJuhI1YexwNAAMqQYgyYgARlwN0+3xgAFUfsQACIfT' +
                    'A8VqMeDAEzgdh4P5bJGXHEwMitMgAaywamgxBsY3xGxiWwA4nSbNAAApMo40aDokCY4CMdlUfB8Hn-aANLHAAgeAD0Cp+HBswX86BFY1S9UYCvUxCQpUYqQI8AIAH5SprIABeM0aDIE' +
                    'JiTb52eCOuYLJakVZeA0oa2MWTQbrAXqyggKyNIBW6EBQaBwgBKABl8FQ1CtoGowdAZsFnET2CTVOSqXVafTxh4ALKyJA2lCKNaZlYoMiKaBmVR0j6rDDXFj+FZrC7h7vbaDsI3iJBk' +
                    'YiUAGV8MwKC6YADFuoGgg2piZj+OlkCBTsO9Vd+ECa4hjAYDADC8EUwfWAl5tBz+gabZguZBkwvIuIYmFOZKCBSB6Dmsvi3owkjiGAKBGr4sj4AWkAALQAHzFqW4GUtSVajOM0BeA+5' +
                    'bQX4cFEQukD9hg0DjEgjbBq4cj-qgAKgWWEFQdusGaghzBIUxIC+L4ib1AYgSkFRNi+EsYibtcxKJoYwRMegFIhisAAeAJIAo4BQMQ+DEBcek5nmGEeMmlzXAOlmoB2fajpOtKWTUzn' +
                    '-ikwKgiC4IeE0TDsOAJDdmoVloHR-ZjlO6CWQMYCqF2PYEOF6rQOuAJ6K4i5Cl+zgDL5JxDr5BiQGCXBvpsThILgPk2eSkAeLAkAGaltg9kgwDbFAawzlBl5mEMFgGNsNDoHpHgDJ0S' +
                    'BqKRFzgGs+nAJ0AxKgtpFgFwghYB1wBKgMmGYdtMBGZEB0GadAwANR3ed3aCtdwAPfeVAPotJhiB8IAaEgs1UA9nQAEIvduy2+AMrRUCGeivZ071UEqp27eSVGXSZp3HVQAwIjAfREb' +
                    'InZ7KGTgDu0CqYXdqjPoaAwAKJ6WMGX7KofQPdAkazUqFj8+kLNyGzOrEIwuC-tlkAbl+0BsuEXKSlsPBatsHhfUMKRoPMizLAOGgYCZAy-vEtXMvVZVrMxrFobgeGJgRFY0nSJGQAA' +
                    'PDwOJ4ph8scty77-B41s2qGPSqNoZyVSEWZ1BUegDEQr66NJV3qJrOYRCZTENiHfV7A1EtZjABVYrLtnJoKpeOxnZsflgpSQLDuk0rF2YmwMtacSbHmO-xQ6CfBw3wJAcj4PwWDDz82' +
                    'csU2GB0m+kSN7gGFu5h-lgkFYjJ7g6+BThBPIqiHhb2ouAKRmRfWSCcuiorAfKwAYg-OQ5E-6sR1ryF7BQ8YDkN4hp3qMbBk0o+DsGIGzSY0lh5WQaDwJ+L8n4NHwE3Egy8Wo4V3hCD' +
                    'w6AJL8WymIeiKRer9nGDQHeIIN770RCiQIQdtIhnmCYFUeI+TB2DCgBGl5GykTzngA+tD0A4XtqSSilYXYMg8Kgsy0ivy6HwEBbYGkoJZEICQRe3AMKYMoYFNqw8F4mUbjJUhLwDClA' +
                    'ylOAg7BaBbizkBEAIYPgTwuiAyxagjSgA0BQgKEIPYinCJhARR8AByWYiI9geLoGcA5zxvmMSsMhAILDD3nquAYVUXiBlsJeXQcFEkdjSjAZSIIoDoBkL4XAQTAinWwrhNSoiIJEQkT' +
                    'WAAkgCNAXAFpXl0LoEEpjcmLQIXDCKs5NIpV8GoWQVAADkKkJmDinMUkygpTEKGAGQRA4hk4pH8D0vpfI+FIBKvoexaF+AaLkWfTQSjRDiEhDUcAAIS4AmrpWVuMAuDAFcGIMk7BUJM' +
                    'XqDAU5WSVz6M+T3NyQ8R45h2XBYSzjDYAgWHbepvFCLiOrFhWpvtbD+zqjQDwAAJbQ-gAHAGICod5zYIhIEmmQaeNtKk0NRKvTCIi0VO2IpI4lK0oJIEQDLMw2yLqyVAOIN5blIBbgi' +
                    'MQLQ40FA6RQJeJu7x+WrDPuAKezyOU7hQh8x5tFJUsE1ZAdinEUo8V7uIAScKDyF2zBVdlrznaYucDiu++LgAeEBN6PWaxcmanyUDT5zhG4-GcGoAgXyhiRucPwZwJg+wUmcAuMAggu' +
                    'ADDpLoZwKoc3ksEF8uGjBnCCkzHSFNANxIgi3CxEEXy6SSA0KG64VyKn2rXNLXK+gsFBSdZRA2mB2F-hSJLSsqwwCZA+pyOkLEDACrei8a+AxKwDAVYTQYhDuxJqQJOvGVBGa7hSMkj' +
                    'k8YqDIGHr4VI+AqnoFXn2xpGLXY4LwdaoZRC5HxJHi8bxG9V43o8MAcBVBAxdvke2q+KQb3OB7erft2T9Eai1HHKghZnF7uidAWm25MK0WfEwC6tzGADFCFYDkwKPoAE1LhdUNl0vh5' +
                    'NdxrGUYheDF1LjEFQx1VmUAgaKOY8wLIBQFHXP49AAALDUaxGhyjJHQW0VeMHcGkuYF2dAUnEjJAGCQhJpjJAyBQBpkEdq+OEegHkSEN7V51JLA7MRLqn0-SPJAE8-1RgqBIHKq55Kb' +
                    'lGCguCVIOR8C2ltBXQqzrez0WzJgfwUgq3EGC+hDBOFrP4Ts1ymsPLlOqHJeAR686Iv9mpTmPYMq5WhwnDcNVawm74HA9qhGMHAQHls40gdDKbQlRHZfSsPwoAni4q4AgM6jmOSgNmD' +
                    'FHEZBcXAxVGDbSXK0ZpEsFiIBSw9ea1KlDlFMAEicMTEcnW-CN3MEU4A17mWBDvai8LzTWr1hnhwmjETJUVLU3UQzKR8iBZvcI67aXbvH26lmXoTmXMAxQWoSN0BwQvxyPXZicngg4V' +
                    'sggNAHTKrgH0Fm-ZwRcCRrO5LWbOiIRFj+w++zkjOSlKnj8IcigpwmHYIwalTGmccM8cBoiJ8AACLC1TjpvNqXUrbGpRQg-mFqwUzHC0TF5c+KKbMNPRRT8YmEeCw9fg-bC7q8XmwJS' +
                    'fBXqXyfpfdvAh+4JwRPx9rfXXH5Afbze9JpI19IT3uVyb06KtRTa5t0rJw9vT5u85bdj22xG5jVOjrv3+uqDbyD00zFau6S+Gxb7++-uDeO4+5c+Pj6GRuw9omtQFgqDW4VrbwOBvc8' +
                    'q6wmrqxECoCp-L9Hr1mf1MyZBIblr7uQ8e3qC+WvUf08x7j2TnvmLV48CaNPpoYmxM++b8P1vsfA9j+DxPz3CgtAaAX37FvAfJPvY7ykQL1eTcF7V2QbYigm976Xwfs-vfPf+O2Lf3F' +
                    '++De4AsmLonPjwTOBvX5F6msHAC9lajgEQEDCK2-ysgqh+GqiiBbwaiAA');
                copyTextToClipboard(largeSource);

            } else {
                copyTextToClipboard(newSource);
            }

            var toolTip = document.createElement('span');
            toolTip.className = 'toolTip';
            toolTip.innerHTML = 'Copied';
            e.target.appendChild(toolTip);

            setTimeout(function () {
                e.target.removeChild(toolTip);
            }, 500);
        });

    }
}

function copyTextToClipboard(sourceText) {
    var textArea = document.createElement("textarea");
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    textArea.value = sourceText;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}