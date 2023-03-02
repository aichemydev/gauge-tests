/* globals gauge*/
"use strict";

const path = require('path');
const {
  openBrowser,
  write,
  closeBrowser,
  goto,
  press,
  screenshot,
  above,
  click,
  checkBox,
  listItem,
  toLeftOf,
  toRightOf,
  link,
  text,
  into,
  textBox,
  image,
  evaluate,
  button,
  dropDown,
  $
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
  await openBrowser({
    headless: headless,
  });
});

afterSuite(async () => {
  await closeBrowser();
});


// opens the app
step("Open the calendar application", async () => {
  await goto("https://demo-calendar.wring.dev");
});

// handles the initial navigation to the appt page
step("Go to the appointment page for a <meetingType>", async (meetingType) => {
  await click(meetingType);
});

// handles the appointment length
step("Choose an appointment length of <appointmentLength>", async (appointmentLength) => {
  let reachedAppointmentLength = await text(appointmentLength).exists(500, 2000);
  console.log(reachedAppointmentLength);
  while (!reachedAppointmentLength) {
    await click(image('Plus'));
    reachedAppointmentLength = await text(appointmentLength).exists(500, 2000);
    console.log(reachedAppointmentLength);
  }
});

// handles the date selection in calendar
step("Choose an appointment on day <apptDay> in the month of <apptMonth>", async (apptDay, apptMonth) => {
  let dayLabel = apptDay + " " + apptMonth;
  console.log(`looking for calendar box with abbr starting with: ${dayLabel}`);
  await click($(`//abbr[starts-with(@aria-label, '${dayLabel}')]`));
});

// handles timezone selection
step("Choose a timezone of <timezone>", async (timezone) => {
  await click($("//input[@class='react-select-custom__input']"));
  await click(text(timezone));
});

// handles appointment selection
step("Pick an appointment time of <apptTime>", async (apptTime) => {
  await click(link(apptTime));
  await click(link('Confirm'));
});

// handles name entry
step("Enter a name of <name>", async (name) => {
  await write(name, into(textBox('Name')));
});

// handles email entry
step("Enter an email of <email>", async (email) => {
  await write(email, into(textBox('Email')));
});

// handles meeting notes entry
step("Enter meeting notes as follows: <meetingNotes>", async (meetingNotes) => {
  await write(meetingNotes, into(textBox('Meeting notes')));
});

// clicks on Confirm
step("Confirm the appointment", async () => {
  await click(button("Schedule"));
});

// checks if we've reached the end
step("Must display <displayText>", async (displayText) => {
  assert.ok(await text(displayText).exists(500, 2000));
});
