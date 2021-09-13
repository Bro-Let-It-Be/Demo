<h1>
  React-native starter
</h1>
<p>
  This documnet is just to get you started with react-native, so that you don't get stuck in setting up the things (which I find found very irritating and time taking &#128531; )
</p>
<h3> Get set and GO!</h3>
<h4># Dependencies</h4>
<p>
  <b>For Mac users:</b> (You will need Node, Watchman, the React Native command line interface, a JDK, and Android Studio)
  <br><b>1.</b> install node and watchman<br>
      <br>
      brew install node<br>
      brew install watchman<br><br>
  <br><b>2.</b> install JDK<br><br>
  brew install --cask adoptopenjdk/openjdk/adoptopenjdk8<br><br>

<b>For Windows users:</b> (You will need Node, the React Native command line interface, a JDK, and Android Studio)
  <br><b>1.</b> install node<br>
      <br>
      check the link: https://nodejs.org/en/download/<br><br>
  <br><b>2.</b> install JDK<br><br>
  check the link: https://www.java.com/en/download/help/windows_manual_download.html<br><br>
  
  <b>For Linux users:</b> (You will need Node, the React Native command line interface, a JDK, and Android Studio)
  <br><b>1.</b> install node<br>
      <br>
      check the link: https://nodejs.org/en/download/<br><br>
  <br><b>2.</b> install JDK<br><br>
  check the link: https://adoptopenjdk.net/<br><br><br>
  <i>*If you have already installed Node on your system, make sure it is Node 12 or newer.</i><br>
  <i>*If you have already installed JDK on your system, make sure it is JDK 8 or newer.</i><br>
</p>
<br>
<h3>Android development environment</h3>
<br>
<p>
  <b>1. Download and install Android Studio.</b> While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:<br>
  <br>https://developer.android.com/studio/index.html <br><br>
Android SDK<br>
Android SDK Platform<br>
Android Virtual Device<br>
Then, click "Next" to install all of these components.
  <br><br>
  <b>2. Install Android SDK</b><br>
  click on "Configure" button and select "SDK Manager".
</p>
<br><br>

<h3>Clone this repository </h3><br<br>
then open terminal and go inside the project folder and do <br>
"npm install"<br>
<i>this will install all the packages required by the project</i><br><br>

once its done write command <br>
<br>npx react-native run-android<br>

<br> Hurrah!! 😁 😃  You are In.<br>

<br><br>
<h4>Possible errors:-</h4>
1. Multiple java versions<br>
use command "cd /Library/Java/JavaVirtualMachines" and then do "ls to check.<br><br>
2. Not able to find emulator even when emulator is running or getting no local.properties file<br>
create a file nameed "local.properties" under project->android folder<br>
add the below line in that file by adding your username<br>
sdk.dir = /Users/USERNAME/Library/Android/sdk
<br>
this is the default location of SDK, if its different for you, then you need to add your SDK location.<br>
