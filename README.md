# mobile-progration

Configuration environment in Windows

### Install next programs:

* [GIT](https://github.com/git-for-windows/git/releases/download/v2.27.0.windows.1/Git-2.27.0-64-bit.exe)
* [NodeJS](https://nodejs.org/dist/v12.17.0/node-v12.17.0-x64.msi)
* [JDK 1.8](https://download.oracle.com/otn/java/jdk/8u251-b08/3d5a2bb8f8d4428bbe94aed7ec7ae784/jdk-8u251-windows-x64.exe) 
* [Android Strudio](https://redirector.gvt1.com/edgedl/android/studio/install/4.0.0.16/android-studio-ide-193.6514223-windows.exe)
* [SDK tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
* [You editor text favorite](https://code.visualstudio.com/download)

### Create environment variables 

* *GRADLE_HOME* 
* *JAVA_HOME*

### In the variable PATH add next configuration:
 * %USER%\AppData\Local\Android\Sdk
 * %USER%\AppData\Local\Android\Sdk\tools\bin
 * C:\Program Files\Android\platform-tools

### Install cli ReactNative
* ``npm install -g react-native-cli``

### Dowload the porject
* ``git clone https://github.com/drgogeta/mobile-progration.git ``
* ``cd  mobile-progration/video``
* ``npm i``

Before run the project is necesary create adv device or configure [debug option in your phone](https://www.embarcadero.com/starthere/xe5/mobdevsetup/android/en/enabling_usb_debugging_on_an_android_device.html#:~:text=Enable%20the%20USB%20Debugging%20option,make%20Settings%20>%20Developer%20options%20available.)

After configure you device or create virtual device, run next command: `` npm run android `` or ``react-native run-android ``
