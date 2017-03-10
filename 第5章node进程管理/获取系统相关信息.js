//
console.info('--Process System Info--');
console.info();
console.info('当前进程id:');
console.info(process.pid);
console.info();
console.info('当前进程名称:');
console.info(process.title);
console.info();
console.info('Node.js版本号：');
console.info(process.version);
console.info();
console.info('Node.js版本属性：');
console.info(process.versions);
console.info();
console.info('Node.js配置选项：');
console.info(process.config);
console.info();
console.info('运行当前进程可执行文件的绝对路径：');
console.info(process.execPath);
console.info();
console.info('当前进程的命令行参数数组：');
console.info(process.argv);
console.info();
console.info('当前系统平台：');
console.info(process.platform);
console.info();
console.info('当前CPU架构：');
console.info(process.arch);
console.info();
console.info('指向当前shell的环境变量：');
console.info(process.env);
console.info();
console.info('--Process System Info--');

/*
--Process System Info--

当前进程id:
8348

当前进程名称:
�$5╔$�%

Node.js版本号：
v5.7.0

Node.js版本属性：
{ http_parser: '2.6.2',
  node: '5.7.0',
  v8: '4.6.85.31',
  uv: '1.8.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '47',
  openssl: '1.0.2f' }

Node.js配置选项：
{ target_defaults:
   { cflags: [],
     default_configuration: 'Release',
     defines: [],
     include_dirs: [],
     libraries: [] },
  variables:
   { asan: 0,
     host_arch: 'x64',
     icu_data_file: 'icudt56l.dat',
     icu_data_in: '../../deps/icu/source/data/in\\icudt56l.dat',
     icu_endianness: 'l',
     icu_gyp_path: 'tools/icu/icu-generic.gyp',
     icu_locales: 'en,root',
     icu_path: 'deps\\icu',
     icu_small: true,
     icu_ver_major: '56',
     node_byteorder: 'little',
     node_enable_v8_vtunejit: false,
     node_install_npm: true,
     node_prefix: '/usr/local',
     node_release_urlbase: '',
     node_shared_http_parser: false,
     node_shared_libuv: false,
     node_shared_openssl: false,
     node_shared_zlib: false,
     node_tag: '',
     node_use_dtrace: false,
     node_use_etw: true,
     node_use_lttng: false,
     node_use_openssl: true,
     node_use_perfctr: true,
     openssl_fips: '',
     openssl_no_asm: 0,
     target_arch: 'ia32',
     v8_enable_gdbjit: 0,
     v8_enable_i18n_support: 1,
     v8_no_strict_aliasing: 1,
     v8_optimized_debug: 0,
     v8_random_seed: 0,
     v8_use_snapshot: true,
     want_separate_host_toolset: 1 } }

运行当前进程可执行文件的绝对路径：
F:\node\node.exe

当前进程的命令行参数数组：
[ 'F:\\node\\node.exe', 'F:\\demo\\things\\app.js' ]

当前系统平台：
win32

当前CPU架构：
ia32

指向当前shell的环境变量：
{ '#envTSLOGSHELLEXT1676': '141586608',
  '#envTSLOGsss1676': '3088576',
  '1830B7BD-F7A3-4c4d-989B-C004DE465EDE': '68c:4043210',
  ACLOCAL_PATH: '/mingw32/share/aclocal:/usr/share/aclocal',
  ALLUSERSPROFILE: 'C:\\ProgramData',
  APPDATA: 'C:\\Users\\Administrator\\AppData\\Roaming',
  'asl.log': 'Destination=file',
  COMMONPROGRAMFILES: 'C:\\Program Files\\Common Files',
  COMPUTERNAME: 'Z69LR7IB58L2985',
  COMSPEC: 'C:\\Windows\\system32\\cmd.exe',
  DISPLAY: 'needs-to-be-defined',
  EXEPATH: 'F:\\Tsofts\\Git',
  FP_NO_HOST_CHECK: 'NO',
  HOME: 'C:\\Users\\Administrator',
  HOMEDRIVE: 'C:',
  HOMEPATH: '\\Users\\Administrator',
  HOSTNAME: 'Z69LR7IB58L2985',
  INFOPATH: '/usr/local/info:/usr/share/info:/usr/info:/share/info:',
  LANG: 'zh_CN.UTF-8',
  LOCALAPPDATA: 'C:\\Users\\Administrator\\AppData\\Local',
  LOGONSERVER: '\\\\Z69LR7IB58L2985',
  MANPATH: '/mingw32/share/man:/usr/local/man:/usr/share/man:/usr/man:/share/man
:',
  MOZ_PLUGIN_PATH: 'D:\\Osofts\\福昕\\plugins\\',
  MSYSTEM: 'MINGW32',
  NUMBER_OF_PROCESSORS: '2',
  OLDPWD: '/f',
  OS: 'Windows_NT',
  PATH: 'C:\\Users\\Administrator\\bin;F:\\Tsofts\\Git\\mingw32\\bin;F:\\Tsofts\
\Git\\usr\\local\\bin;F:\\Tsofts\\Git\\usr\\bin;F:\\Tsofts\\Git\\usr\\bin;F:\\Ts
ofts\\Git\\mingw32\\bin;F:\\Tsofts\\Git\\usr\\bin;C:\\Users\\Administrator\\bin;
F:\\Tsofts\\Ruby22\\bin;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\
\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Program Files\\Windows
Kits\\8.1\\Windows Performance Toolkit;C:\\Program Files\\Microsoft SQL Server\\
110\\Tools\\Binn;C:\\Program Files\\Microsoft SDKs\\TypeScript\\1.0;C:\\Program
Files\\Microsoft SQL Server\\120\\Tools\\Binn;F:\\node;D:\\Osofts\\mysql\\bin;F:
\\Tsofts\\Git\\usr\\bin;C:\\Users\\Administrator\\AppData\\Roaming\\npm;F:\\Tsof
ts\\Git\\usr\\bin\\vendor_perl;F:\\Tsofts\\Git\\usr\\bin\\core_perl',
  PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC',
  PKG_CONFIG_PATH: '/mingw32/lib/pkgconfig:/mingw32/share/pkgconfig',
  PLINK_PROTOCOL: 'ssh',
  PRINTER: 'Foxit Reader PDF Printer',
  PROCESSOR_ARCHITECTURE: 'x86',
  PROCESSOR_IDENTIFIER: 'x86 Family 6 Model 23 Stepping 10, GenuineIntel',
  PROCESSOR_LEVEL: '6',
  PROCESSOR_REVISION: '170a',
  ProgramData: 'C:\\ProgramData',
  PROGRAMFILES: 'C:\\Program Files',
  PS1: '\\[\\033]0;$TITLEPREFIX:${PWD//[^[:ascii:]]/?}\\007\\]\\n\\[\\033[32m\\]
\\u@\\h \\[\\033[35m\\]$MSYSTEM \\[\\033[33m\\]\\w\\[\\033[36m\\]`__git_ps1`\\[\
\033[0m\\]\\n$ ',
  PSModulePath: 'C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules\\',
  PUBLIC: 'C:\\Users\\Public',
  PWD: '/f/demo/things',
  SESSIONNAME: 'Console',
  SHELL: 'F:\\Tsofts\\Git\\usr\\bin\\bash',
  SHLVL: '1',
  SSH_ASKPASS: '/mingw32/libexec/git-core/git-gui--askpass',
  SYSTEMDRIVE: 'C:',
  SYSTEMROOT: 'C:\\Windows',
  TEMP: 'C:\\Users\\ADMINI~1\\AppData\\Local\\Temp',
  TERM: 'xterm',
  TMP: 'C:\\Users\\ADMINI~1\\AppData\\Local\\Temp',
  TMPDIR: 'C:\\Users\\ADMINI~1\\AppData\\Local\\Temp',
  USERDOMAIN: 'Z69LR7IB58L2985',
  USERNAME: 'Administrator',
  USERPROFILE: 'C:\\Users\\Administrator',
  VS110COMNTOOLS: 'C:\\Program Files\\Microsoft Visual Studio 11.0\\Common7\\Too
ls\\',
  VS120COMNTOOLS: 'F:\\Tsofts\\Microsoft Visual Studio 12.0\\Common7\\Tools\\',
  WINDIR: 'C:\\Windows',
  windows_tracing_flags: '3',
  windows_tracing_logfile: 'C:\\BVTBin\\Tests\\installpackage\\csilogfile.log',
  _: '/usr/bin/winpty' }

--Process System Info--

*/