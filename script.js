/* =========================
   TIME
========================= */

function updateTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = hours % 12 || 12;
    minutes = minutes.toString().padStart(2, "0");

    const time = `${hours}:${minutes}`;

    document.getElementById("currentTime").textContent = time;
    document.getElementById("homeTime").textContent = time;
}

updateTime();
setInterval(updateTime, 1000);


/* =========================
   UNLOCK
========================= */

function unlockPhone() {
    const input = document.getElementById("passcode");
    const error = document.getElementById("wrongPassword");

    if (input.value.trim().toLowerCase() === "i love you") {

        document.getElementById("lockScreen").classList.add("hidden");
        document.getElementById("homeScreen").classList.remove("hidden");

        input.value = "";
        error.textContent = "";

    } else {

        error.textContent = "Wrong passcode... try again 👀";
        input.value = "";

    }
}

document.getElementById("passcode").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        unlockPhone();
    }
});


/* =========================
   APP SYSTEM
========================= */

function openApp(app) {

    const appWindow = document.getElementById("appWindow");
    const title = document.getElementById("appTitle");
    const content = document.getElementById("appContent");

    appWindow.classList.remove("hidden");

    if (app === "messages") {
        title.textContent = "Messages";
        content.innerHTML = messagesApp();
    }

    if (app === "gallery") {
        title.textContent = "Gallery";
        content.innerHTML = galleryMenu();
    }

    if (app === "notes") {
        title.textContent = "Notes";
        content.innerHTML = notesMenu();
    }

    if (app === "calendar") {
        title.textContent = "Calendar";
        content.innerHTML = calendarMenu();
    }

    if (app === "deleted") {
        title.textContent = "Recently Deleted";
        content.innerHTML = deletedMenu();
    }

    if (app === "secret") {
        title.textContent = "Secret App";
        content.innerHTML = secretMenu();
    }
}


/* =========================
   CLOSE APP
========================= */

function closeApp() {
    document.getElementById("appWindow").classList.add("hidden");
}


/* =========================
   MESSAGES
========================= */

function messagesApp() {

    return `

        <div class="message manya">
            <div class="message-name">Manya</div>
            miss youuuu
        </div>

        <div class="message ayan">
            <div class="message-name">Ayan</div>
            areyy meri bachii
        </div>

        <div class="message manya">
            <div class="message-name">Manya</div>
            I lyesss 💌
        </div>

        <div class="card" style="text-align:center; margin-top:25px;">
            <span class="heart">♡</span>
            <br>
            Conversation saved forever.
        </div>

    `;
}


/* =========================================================
   GALLERY
========================================================= */

function galleryMenu() {

    return `

        <div class="card">
            <h3>📷 Gallery</h3>
            <p class="small">
                No photos here.
                Just a few things I remember. ♡
            </p>
        </div>

        <div class="secret-box" onclick="thingsRemember()">
            <h3>💭 Things I Remember</h3>
            <p>A few things I never want to forget.</p>
        </div>

        <div class="secret-box" onclick="evidenceAgainst()">
            <h3>⚖️ Evidence Against You</h3>
            <p>A very serious case against Ayan.</p>
        </div>

        <div class="secret-box" onclick="favoriteMoments()">
            <h3>❤️ Favorite Moments</h3>
            <p>The moments I keep coming back to.</p>
        </div>

    `;
}


/* THINGS I REMEMBER */

function thingsRemember() {

    setAppContent("Things I Remember", `

        ${backButton("galleryMenu()")}

        <div class="gallery-section">

            <h3>Things I Remember</h3>

            <div class="memory">You are my life.</div>

            <div class="memory">
                The way you call me “meri bachii.”
            </div>

            <div class="memory">
                The little ways you make me feel loved.
            </div>

            <div class="memory">
                The random moments when I suddenly miss you.
            </div>

            <div class="memory">
                The way talking to you can make an ordinary day feel better.
            </div>

            <div class="memory">
                The times you were there for me when I needed you.
            </div>

            <div class="memory">
                Your little habits that I've come to know so well.
            </div>

            <div class="memory">
                The conversations I never wanted to end.
            </div>

            <div class="memory">
                The comfort I feel when I'm talking to you.
            </div>

            <div class="memory">
                The moments where you made me feel special without even realizing it.
            </div>

            <div class="memory">
                How easily you became such an important part of my life.
            </div>

            <div class="memory">
                The little things you probably don't remember, but I do.
            </div>

            <div class="memory">
                All the moments that made me realize how much you mean to me.
            </div>

        </div>

        <div class="card" style="text-align:center;">
            Maybe you don't remember all of these.
            <br><br>
            But I do. And I always will. ❤️
        </div>

    `);
}


/* EVIDENCE */

function evidenceAgainst() {

    setAppContent("Evidence Against You", `

        ${backButton("galleryMenu()")}

        <div class="gallery-section">

            <h3>⚖️ Evidence Against You</h3>

            <div class="memory">
                <strong>Exhibit 01 — Excessive Cuteness</strong>
                <br><br>
                You have been repeatedly caught being way too cute.
            </div>

            <div class="memory">
                <strong>Exhibit 02 — Making Me Miss You</strong>
                <br><br>
                Somehow responsible for Manya randomly thinking about you.
            </div>

            <div class="memory">
                <strong>Exhibit 03 — “Meri Bachii” Usage</strong>
                <br><br>
                Repeated use of this phrase has been documented.
                <br>
                Effect: immediate softness. 💌
            </div>

            <div class="memory">
                <strong>Exhibit 04 — Unnecessary Smiling</strong>
                <br><br>
                Your messages have been linked to suspicious amounts of smiling at the phone.
            </div>

            <div class="memory">
                <strong>Exhibit 05 — Taking Up My Brain Space</strong>
                <br><br>
                You have occupied an unreasonable amount of Manya's thoughts.
            </div>

            <div class="memory">
                <strong>Exhibit 06 — Being Too Important</strong>
                <br><br>
                Somehow went from “a person” to one of the most important people in my life.
            </div>

            <div class="memory">
                <strong>Exhibit 07 — No Escape</strong>
                <br><br>
                Despite multiple attempts, Manya has failed to stop loving you.
            </div>

            <div class="card">
                ❌ Charges not dropped
                <br>
                ❌ Suspect not forgiven
                <br>
                ✅ Suspect still loved
            </div>

        </div>

    `);
}


/* FAVORITE MOMENTS */

function favoriteMoments() {

    setAppContent("Favorite Moments", `

        ${backButton("galleryMenu()")}

        <div class="gallery-section">

            <h3>❤️ Favorite Moments</h3>

            <div class="memory">Hugging you.</div>
            <div class="memory">Silence with you.</div>
            <div class="memory">Just you.</div>
            <div class="memory">Looking at you and forgetting what I was saying.</div>
            <div class="memory">Talking to you about absolutely nothing.</div>
            <div class="memory">When you hold my hand.</div>
            <div class="memory">When you look at me without saying anything.</div>
            <div class="memory">Falling asleep while talking to you.</div>
            <div class="memory">Waking up to a message from you.</div>
            <div class="memory">When you make me feel safe without even trying.</div>
            <div class="memory">Sitting next to you and not needing to do anything.</div>
            <div class="memory">When you randomly make me smile.</div>
            <div class="memory">Those moments when it feels like it's just us and nothing else matters.</div>
            <div class="memory">Being close to you, even without words.</div>
            <div class="memory">
                Every ordinary moment that becomes special simply because you're there.
            </div>

        </div>

        <div class="card" style="text-align:center;">
            My favorite moments aren't always the big ones.
            <br><br>
            Most of them are just moments where you're there. ❤️
        </div>

    `);
}


/* =========================================================
   NOTES
========================================================= */

function notesMenu() {

    return `

        <div class="card">
            <h3>📝 Notes</h3>
            <p class="small">
                Some things were easier to write than say.
            </p>
        </div>

        <div class="secret-box" onclick="neverSay()">
            <h3>🤍 Things I Never Say</h3>
            <p>Things I don't always say out loud.</p>
        </div>

        <div class="secret-box" onclick="reasonsFavorite()">
            <h3>💗 Reasons You're My Favorite</h3>
            <p>Exactly what the title says.</p>
        </div>

        <div class="secret-box" onclick="randomThings()">
            <h3>💭 Random Things About You</h3>
            <p>Things you probably don't know I notice.</p>
        </div>

        <div class="secret-box" onclick="drafts()">
            <h3>📩 Drafts</h3>
            <p>Messages that never got sent.</p>
        </div>

        <div class="secret-box" onclick="doNotOpen()">
            <h3>🚫 DO NOT OPEN</h3>
            <p>Seriously. Don't.</p>
        </div>

    `;
}


/* THINGS I NEVER SAY */

function neverSay() {

    setAppContent("Things I Never Say", `

        ${backButton("notesMenu()")}

        <div class="note">

            <h3>Things I Never Say</h3>

            <p>
                I miss you more than I usually say.
                <br><br>
                Sometimes I just want to sit next to you and do nothing.
                <br><br>
                You mean more to me than I know how to explain.
                <br><br>
                I notice the little things you do.
                <br><br>
                Sometimes I look at you and just feel lucky.
                <br><br>
                I don't always say it, but you make me feel safe.
                <br><br>
                I remember the small things you probably think I forgot.
                <br><br>
                I love hearing you talk.
                <br><br>
                Sometimes I want to tell you how much I love you, but I don't know how to put it into words.
                <br><br>
                I hope you know how special you are to me.
                <br><br>
                Sometimes I just want a little more time with you.
                <br><br>
                I don't think you realize how much of my heart you have.
            </p>

        </div>

        <div class="note final">
            Maybe someday I'll say all of this out loud.
            <br>
            For now, you found it here. ❤️
        </div>

    `);
}


/* REASONS FAVORITE */

function reasonsFavorite() {

    setAppContent("Reasons You're My Favorite", `

        ${backButton("notesMenu()")}

        <div class="note">

            <h3>Reasons You're My Favorite</h3>

            <p>
                You make me feel comfortable being completely myself.
                <br><br>
                You listen to me.
                <br><br>
                You know how to make me smile.
                <br><br>
                You make ordinary moments feel special.
                <br><br>
                You make me feel cared for.
                <br><br>
                I can talk to you about the smallest things.
                <br><br>
                You make me feel understood.
                <br><br>
                I love the way you talk to me.
                <br><br>
                I love being around you, even when we're doing absolutely nothing.
                <br><br>
                You make me feel better without even trying.
                <br><br>
                You're someone I can miss even right after seeing you.
                <br><br>
                You make me feel like I have someone to come back to.
                <br><br>
                You're my favorite person to tell things to.
                <br><br>
                Because somehow, out of everyone, you're the person I want beside me.
            </p>

        </div>

    `);
}


/* RANDOM THINGS */

function randomThings() {

    setAppContent("Random Things About You", `

        ${backButton("notesMenu()")}

        <div class="note">

            <h3>Random Things About You</h3>

            <p>
                You probably don't realize how cute you look when you're focused.
                <br><br>
                I remember little things you tell me.
                <br><br>
                Your name appearing on my screen can instantly change my mood.
                <br><br>
                I can recognize your messages without even thinking about it.
                <br><br>
                Sometimes I reread our conversations.
                <br><br>
                I have random moments where something reminds me of you.
                <br><br>
                I like hearing you say my name.
                <br><br>
                I could listen to you talk for way longer than I admit.
                <br><br>
                Somehow, you became part of my everyday thoughts.
                <br><br>
                I notice when your mood changes.
                <br><br>
                I remember your little expressions.
                <br><br>
                Sometimes I just want to know what you're doing.
                <br><br>
                I like knowing the tiny details of your day.
                <br><br>
                You have no idea how often you randomly cross my mind.
                <br><br>
                You're in more of my thoughts than you probably realize.
            </p>

        </div>

        <div class="note final">
            Random fact:
            <br><br>
            You're my favorite notification. 💌
        </div>

    `);
}


/* DRAFTS */

function drafts() {

    setAppContent("Drafts", `

        ${backButton("notesMenu()")}

        <div class="note">

            <h3>📩 Drafts</h3>

            <div class="card">

                <div class="small">11:47 PM</div>

                <br>

                “I miss you.”

                <br><br>

                <span class="small">Status: Not sent</span>

                <button
                    class="action-button secondary-button"
                    onclick="showDraftOne()"
                >
                    Why didn't you send it?
                </button>

                <div id="draftOneAnswer"></div>

            </div>


            <div class="card">

                <div class="small">1:16 AM</div>

                <br>

                “I was just thinking…”

                <br><br>

                <span class="small">Status: Not sent</span>

                <p style="margin-top:15px;">
                    about how weird it is that one person can become such a huge part of your life.
                </p>

            </div>


            <div class="card">

                <div class="small">2:03 AM</div>

                <br>

                “Goodnight…”

                <br><br>

                <span class="small">Status: Not sent</span>

                <p style="margin-top:15px;">
                    I wanted to say goodnight, but honestly I didn't want the conversation to end.
                </p>

            </div>


            <div class="card">

                <div class="small">Never Sent</div>

                <br>

                “If you ever wonder whether you matter to me…”

                <br><br>

                you do. More than I probably say.

                <button
                    class="action-button"
                    onclick="sendDraft()"
                >
                    SEND
                </button>

                <div id="draftSent"></div>

            </div>

        </div>

    `);
}


/* DO NOT OPEN */

function doNotOpen() {

    setAppContent("🚫 DO NOT OPEN", `

        ${backButton("notesMenu()")}

        <div class="note">

            <div id="dontOpenContent">

                <div class="warning">

                    <div class="warning-icon">⚠️</div>

                    <h2>WARNING</h2>

                    <p>
                        This note was specifically marked
                        <strong>DO NOT OPEN.</strong>
                        <br><br>
                        You opened it anyway.
                    </p>

                    <button
                        class="action-button"
                        onclick="doNotOpenContinue()"
                    >
                        Continue
                    </button>

                </div>

            </div>

        </div>

    `);
}


function doNotOpenContinue() {

    document.getElementById("dontOpenContent").innerHTML = `

        <div class="warning">

            <h2>SECOND WARNING</h2>

            <p>
                You can still leave.
            </p>

            <button
                class="action-button secondary-button"
                onclick="dontOpenLeave()"
            >
                ← Leave
            </button>

            <button
                class="action-button"
                onclick="dontOpenCurious()"
            >
                I'm curious
            </button>

        </div>

    `;
}


function dontOpenLeave() {

    document.getElementById("dontOpenContent").innerHTML = `

        <div class="warning">

            <h2>Good decision.</h2>

            <p>
                You actually listened for once. 😭
            </p>

        </div>

    `;
}


function dontOpenCurious() {

    document.getElementById("appTitle").textContent =
        "😭 YOU ACTUALLY OPENED IT";

    document.getElementById("dontOpenContent").innerHTML = `

        <div class="warning">

            <p>
                I knew you'd click it.
            </p>

            <p>
                Okay fine.
                <br><br>
                There wasn't anything dangerous here.
                <br><br>
                I just wanted to see how far your curiosity would take you.
                <br><br>
                Now that you're here…
                <br><br>
                <strong>I love you. ❤️</strong>
            </p>

            <p class="small">
                P.S. You really need to learn how to follow instructions.
            </p>

        </div>

    `;
}


/* =========================================================
   CALENDAR
========================================================= */

function calendarMenu() {

    return `

        <div class="card">
            <h3>📅 Our Important Dates</h3>
            <p class="small">
                A few dates worth remembering.
            </p>
        </div>

        <div class="secret-box" onclick="boyfriendDay()">
            <h3>💗 October 3, 2026</h3>
            <p>Boyfriend's Day</p>
        </div>

        <div class="secret-box" onclick="gotTogether()">
            <h3>❤️ June 18, 2024</h3>
            <p>The day we got together</p>
        </div>

    `;
}


function boyfriendDay() {

    setAppContent("Boyfriend's Day", `

        ${backButton("calendarMenu()")}

        <div class="note final">

            <h3>💗 Boyfriend's Day</h3>

            <p>
                October 3, 2026
            </p>

            <br>

            <strong>“Just love youu.”</strong>

        </div>

    `);
}


function gotTogether() {

    setAppContent("June 18, 2024", `

        ${backButton("calendarMenu()")}

        <div class="note final">

            <h3>❤️ The day we got together</h3>

            <p>
                June 18, 2024
            </p>

            <br>

            <strong>“And somehow, here we are.”</strong>

        </div>

    `);
}


/* =========================================================
   RECENTLY DELETED
========================================================= */

function deletedMenu() {

    return `

        <div class="card">
            <h3>🗑️ Recently Deleted</h3>

            <p class="small">
                3 items
            </p>
        </div>

        <div class="secret-box" onclick="deletedItems()">
            <h3>🗑️ View Deleted Items</h3>
            <p>Maybe they should stay deleted...</p>
        </div>

    `;
}


function deletedItems() {

    setAppContent("Recently Deleted", `

        ${backButton("deletedMenu()")}

        <div class="memory">
            “I don't miss you.”
            <br>
            <span class="small">Deleted: 2 days ago</span>
        </div>

        <div class="memory">
            “You're not my favorite person.”
            <br>
            <span class="small">Deleted: 1 day ago</span>
        </div>

        <div class="memory">
            “I don't love you that much.”
            <br>
            <span class="small">Deleted: Just now</span>
        </div>

        <div class="card">

            <p style="text-align:center;">
                Restore these items?
            </p>

            <button
                class="action-button"
                onclick="restoreDeleted()"
            >
                YES
            </button>

            <button
                class="action-button secondary-button"
                onclick="dontRestore()"
            >
                NO
            </button>

            <div id="deletedResult"></div>

        </div>

    `);
}


function restoreDeleted() {

    document.getElementById("deletedResult").innerHTML = `

        <div class="card" style="margin-top:15px; text-align:center;">

            Restoring…

            <br><br>

            ▓▓▓▓▓▓▓▓▓▓ 100%

            <br><br>

            Restoration complete.

            <br><br>

            Hmm.

            <br><br>

            Apparently these statements were never true
            in the first place. 😭

            <br><br>

            Deleted again. Permanently. ❤️

            <button
                class="action-button"
                onclick="closeApp()"
            >
                Okay 😭
            </button>

        </div>

    `;
}


function dontRestore() {

    document.getElementById("deletedResult").innerHTML = `

        <div class="card" style="margin-top:15px;">

            Good choice.

            <br><br>

            Because honestly, those things were lies anyway. 😭

            <br><br>

            Permanently deleted.

            <br><br>

            <strong>Things I actually mean:</strong>

            <br><br>

            I miss you.
            <br>
            I love you.
            <br>
            You're my favorite. 💌

        </div>

    `;
}


/* =========================================================
   SECRET APP
========================================================= */

function secretMenu() {

    return `

        <div class="card" style="text-align:center;">

            <h3>🔐 Classified</h3>

            <p class="small">
                Ayan, you weren't supposed to find this.
            </p>

        </div>

        <div class="secret-box" onclick="secretFileOne()">
            <h3>❤️ OPEN THIS</h3>
            <p>a little reminder ♡</p>
        </div>

        <div class="secret-box" onclick="secretFileTwo()">
            <h3>💌 OPEN THIS TOO</h3>
            <p>something i don't say enough</p>
        </div>

        <div class="secret-box" onclick="secretFileThree()">
            <h3>🚫 DEFINITELY DON'T OPEN</h3>
            <p>highly confidential</p>
        </div>

        <div id="secretResult"></div>

    `;
}


function secretFileOne() {

    setAppContent("a little reminder ♡", `

        ${backButton("secretMenu()")}

        <div class="note">

            <h3>a little reminder ♡</h3>

            <p>

                hiiii ayannn 💌

                <br><br>

                just wanted to remind you that you mean so much to me.
                i love talking to you, being around you, and even the
                little moments where we're doing absolutely nothing.

                <br><br>

                you make ordinary things feel special just by being there.

                <br><br>

                and if you ever forget how loved you are,
                come back and read this again.

                <br><br>

                <strong>
                    i love youuu, meri jaan. always your manya. ♡
                </strong>

            </p>

        </div>

    `);
}


function secretFileTwo() {

    setAppContent("something i don't say enough", `

        ${backButton("secretMenu()")}

        <div class="note">

            <h3>something i don't say enough</h3>

            <p>

                if i could keep one feeling forever,
                it would be the feeling of being with you.

                <br><br>

                i don't need every moment to be perfect.
                i just want more moments with you.

                <br><br>

                more hugs, more time together, more conversations,
                more of the little things that somehow mean everything to me.

                <br><br>

                <strong>
                    it's not always about what we do.
                    sometimes it's simply about the fact that it's you. ♡
                </strong>

            </p>

        </div>

    `);
}


function secretFileThree() {

    setAppContent("🚫 Restricted File", `

        ${backButton("secretMenu()")}

        <div id="secretFileContent">

            <div class="note">

                <div class="warning">

                    <div class="warning-icon">⚠️</div>

                    <h2>RESTRICTED FILE</h2>

                    <p>
                        AYAN, YOU HAVE BEEN WARNED.
                        <br><br>
                        This file contains highly confidential information.
                        <br><br>
                        Opening it is entirely your responsibility.
                    </p>

                    <button
                        class="action-button secondary-button"
                        onclick="secretBack()"
                    >
                        GO BACK
                    </button>

                    <button
                        class="action-button"
                        onclick="secretOpenAnyway()"
                    >
                        OPEN ANYWAY
                    </button>

                </div>

            </div>

        </div>

    `);
}


function secretBack() {
    setAppContent("Secret App", secretMenu());
}


function secretOpenAnyway() {

    document.getElementById("secretFileContent").innerHTML = `

        <div class="note">

            <div class="warning">

                <h2>oh.</h2>

                <p>
                    you actually opened it.
                    <br><br>
                    ayan, i literally said DON'T OPEN IT. 😭
                </p>

                <button
                    class="action-button"
                    onclick="secretContinue()"
                >
                    CONTINUE
                </button>

            </div>

        </div>

    `;
}


function secretContinue() {

    document.getElementById("secretFileContent").innerHTML = `

        <div class="note">

            <h3>CONFIDENTIAL INFORMATION</h3>

            <div class="case-file">

                Subject's girlfriend is ridiculously attached to him.
                <br><br>

                Subject's girlfriend misses him a lot.
                <br><br>

                Subject's girlfriend thinks about him more than she admits.
                <br><br>

                Subject's girlfriend loves him an unreasonable amount.

                <br><br>

                <strong>
                    Conclusion: Ayan is the problem. 💗
                </strong>

            </div>

            <button
                class="action-button"
                onclick="secretFinalReport()"
            >
                VIEW FINAL REPORT
            </button>

        </div>

    `;
}


function secretFinalReport() {

    document.getElementById("secretFileContent").innerHTML = `

        <div class="note">

            <div class="warning">

                <div class="warning-icon">📄</div>

                <h2>CASE CLOSED.</h2>

                <p>

                    <strong>Your punishment:</strong>

                    <br><br>

                    You have to let Manya love you.

                    <br><br>

                    No appeals.
                    <br>
                    No refunds.
                    <br>
                    No escape. 😭💌

                </p>

                <p class="small">
                    <i>signed,</i>
                    <br>
                    <strong>your manya ♡</strong>
                </p>

            </div>

        </div>

    `;
}


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function setAppContent(title, html) {

    document.getElementById("appTitle").textContent = title;
    document.getElementById("appContent").innerHTML = html;

}


function backButton(functionName) {

    return `
        <button
            class="action-button secondary-button"
            onclick="${functionName}"
            style="margin-bottom:18px;"
        >
            ← Back
        </button>
    `;

}


/* =========================================================
   DRAFT INTERACTIONS
========================================================= */

function showDraftOne() {

    document.getElementById("draftOneAnswer").innerHTML = `

        <div class="card" style="margin-top:12px;">

            Because I didn't know how to say

            <br>

            <strong>
                I really, really miss you.
            </strong>

        </div>

    `;
}


function sendDraft() {

    document.getElementById("draftSent").innerHTML = `

        <div class="card" style="margin-top:12px; text-align:center;">

            Message sent. 💌

            <br><br>

            <span class="small">
                Delivered to Ayan.
            </span>

        </div>

    `;
}
