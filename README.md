# WeatherProject-OpenWeatherMaps
We are making use of Open weather maps and getting responses using GET with Express JS and nodeJs

When we just pass the https.get(url function(response){
    console.log(response);
})

We get the following output: 
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
server started at port 3000
<ref *2> IncomingMessage {
  _readableState: ReadableState {
    objectMode: false,
    highWaterMark: 16384,
    buffer: BufferList { head: null, tail: null, length: 0 },
    length: 0,
    pipes: [],
    flowing: null,
    ended: false,
    endEmitted: false,
    reading: false,
    sync: true,
    needReadable: false,
    emittedReadable: false,
    readableListening: false,
    resumeScheduled: false,
    errorEmitted: false,
    emitClose: true,
    autoDestroy: false,
    destroyed: false,
    errored: null,
    closed: false,
    closeEmitted: false,
    defaultEncoding: 'utf8',
    awaitDrainWriters: null,
    multiAwaitDrain: false,
    readingMore: true,
    decoder: null,
    encoding: null,
    [Symbol(kPaused)]: null
  },
  _events: [Object: null prototype] { end: [Function: responseOnEnd] },
  _eventsCount: 1,
  _maxListeners: undefined,
  socket: <ref *1> TLSSocket {
    _tlsOptions: {
      allowHalfOpen: undefined,
      pipe: false,
      secureContext: [SecureContext],
      isServer: false,
      requestCert: true,
      rejectUnauthorized: true,
      session: undefined,
      ALPNProtocols: undefined,
      requestOCSP: undefined,
      enableTrace: undefined,
      pskCallback: undefined,
      highWaterMark: undefined
    },
    _secureEstablished: true,
    _securePending: false,
    _newSessionPending: false,
    _controlReleased: true,
    secureConnecting: false,
    _SNICallback: null,
    servername: 'api.openweathermap.org',
    alpnProtocol: false,
    authorized: true,
    authorizationError: null,
    encrypted: true,
    _events: [Object: null prototype] {
      close: [Array],
      end: [Array],
      newListener: [Function: keylogNewListener],
      secure: [Function: onConnectSecure],
      session: [Function (anonymous)],
      free: [Function: onFree],
      timeout: [Array],
      agentRemove: [Function: onRemove],
      error: [Function: socketErrorListener],
      data: [Function: socketOnData],
      drain: [Function: ondrain]
    },
    _eventsCount: 11,
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: 'api.openweathermap.org',
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: [],
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: false,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: false,
      destroyed: false,
      errored: null,
      closed: false,
      closeEmitted: false,
      defaultEncoding: 'utf8',
      awaitDrainWriters: null,
      multiAwaitDrain: false,
      readingMore: false,
      decoder: null,
      encoding: null,
      [Symbol(kPaused)]: false
    },
    _maxListeners: undefined,
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: false,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      afterWriteTickInfo: null,
      buffered: [],
      bufferedIndex: 0,
      allBuffers: true,
      allNoop: true,
      pendingcb: 0,
      prefinished: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: false,
      errored: null,
      closed: false,
      closeEmitted: false,
      writable: true
    },
    allowHalfOpen: false,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: undefined,
    _server: null,
    ssl: TLSWrap {
      _parent: [TCP],
      _parentWrap: undefined,
      _secureContext: [SecureContext],
      reading: true,
      onkeylog: [Function: onkeylog],
      onhandshakestart: [Function: noop],
      onhandshakedone: [Function (anonymous)],
      onocspresponse: [Function: onocspresponse],
      onnewsession: [Function: onnewsessionclient],
      onerror: [Function: onerror],
      [Symbol(owner_symbol)]: [Circular *1]
    },
    _requestCert: true,
    _rejectUnauthorized: true,
    parser: HTTPParser {
      '1': [Function: parserOnHeaders],
      '2': [Function: parserOnHeadersComplete],
      '3': [Function: parserOnBody],
      '4': [Function: parserOnMessageComplete],
      '5': null,
      '6': null,
      _headers: [],
      _url: '',
      socket: [Circular *1],
      incoming: [Circular *2],
      outgoing: [ClientRequest],
      maxHeaderPairs: 2000,
      _consumed: false,
      onIncoming: [Function: parserOnIncomingClient],
      [Symbol(resource_symbol)]: [HTTPClientAsyncResource]
    },
    _httpMessage: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: false,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: 0,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      socket: [Circular *1],
      _header: 'GET /data/2.5/weather?q=london&appid=d17aad235635a02dad796d028a9347c4&units=metric HTTP/1.1\r\n' +
        'Host: api.openweathermap.org\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: noopPendingOutput],
      agent: [Agent],
      socketPath: undefined,
      method: 'GET',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      path: '/data/2.5/weather?q=london&appid=d17aad235635a02dad796d028a9347c4&units=metric',
      _ended: false,
      res: [Circular *2],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: [HTTPParser],
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'api.openweathermap.org',
      protocol: 'https:',
      [Symbol(kCapture)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype]
    },
    [Symbol(res)]: TLSWrap {
      _parent: [TCP],
      _parentWrap: undefined,
      _secureContext: [SecureContext],
      reading: true,
      onkeylog: [Function: onkeylog],
      onhandshakestart: [Function: noop],
      onhandshakedone: [Function (anonymous)],
      onocspresponse: [Function: onocspresponse],
      onnewsession: [Function: onnewsessionclient],
      onerror: [Function: onerror],
      [Symbol(owner_symbol)]: [Circular *1]
    },
    [Symbol(verified)]: true,
    [Symbol(pendingSession)]: null,
    [Symbol(async_id_symbol)]: 16,
    [Symbol(kHandle)]: TLSWrap {
      _parent: [TCP],
      _parentWrap: undefined,
      _secureContext: [SecureContext],
      reading: true,
      onkeylog: [Function: onkeylog],
      onhandshakestart: [Function: noop],
      onhandshakedone: [Function (anonymous)],
      onocspresponse: [Function: onocspresponse],
      onnewsession: [Function: onnewsessionclient],
      onerror: [Function: onerror],
      [Symbol(owner_symbol)]: [Circular *1]
    },
    [Symbol(kSetNoDelay)]: false,
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: null,
    [Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
    [Symbol(kBufferGen)]: null,
    [Symbol(kCapture)]: false,
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0,
    [Symbol(connect-options)]: {
      rejectUnauthorized: true,
      ciphers: 'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
      checkServerIdentity: [Function: checkServerIdentity],
      minDHSize: 1024,
      protocol: 'https:',
      hostname: 'api.openweathermap.org',
      hash: '',
      search: '?q=london&appid=d17aad235635a02dad796d028a9347c4&units=metric',
      pathname: '/data/2.5/weather',
      path: null,
      href: 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=d17aad235635a02dad796d028a9347c4&units=metric',
      _defaultAgent: [Agent],
      port: 443,
      host: 'api.openweathermap.org',
      servername: 'api.openweathermap.org',
      _agentKey: 'api.openweathermap.org:443:::::::::::::::::::::',
      encoding: null,
      singleUse: true
    },
    [Symbol(RequestTimeout)]: undefined
  },
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  httpVersion: '1.1',
  complete: false,
  headers: {
    server: 'openresty',
    date: 'Fri, 18 Jun 2021 07:22:21 GMT',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '505',
    connection: 'close',
    'x-cache-key': '/data/2.5/weather?q=london&units=metric',
    'access-control-allow-origin': '*',
    'access-control-allow-credentials': 'true',
    'access-control-allow-methods': 'GET, POST'
  },
  rawHeaders: [
    'Server',
    'openresty',
    'Date',
    'Fri, 18 Jun 2021 07:22:21 GMT',
    'Content-Type',
    'application/json; charset=utf-8',
    'Content-Length',
    '505',
    'Connection',
    'close',
    'X-Cache-Key',
    '/data/2.5/weather?q=london&units=metric',
    'Access-Control-Allow-Origin',
    '*',
    'Access-Control-Allow-Credentials',
    'true',
    'Access-Control-Allow-Methods',
    'GET, POST'
  ],
  trailers: {},
  rawTrailers: [],
  aborted: false,
  upgrade: false,
  url: '',
  method: null,
  statusCode: 200,
  statusMessage: 'OK',
  client: <ref *1> TLSSocket {
    _tlsOptions: {
      allowHalfOpen: undefined,
      pipe: false,
      secureContext: [SecureContext],
      isServer: false,
      requestCert: true,
      rejectUnauthorized: true,
      session: undefined,
      ALPNProtocols: undefined,
      requestOCSP: undefined,
      enableTrace: undefined,
      pskCallback: undefined,
      highWaterMark: undefined
    },
    _secureEstablished: true,
    _securePending: false,
    _newSessionPending: false,
    _controlReleased: true,
    secureConnecting: false,
    _SNICallback: null,
    servername: 'api.openweathermap.org',
    alpnProtocol: false,
    authorized: true,
    authorizationError: null,
    encrypted: true,
    _events: [Object: null prototype] {
      close: [Array],
      end: [Array],
      newListener: [Function: keylogNewListener],
      secure: [Function: onConnectSecure],
      session: [Function (anonymous)],
      free: [Function: onFree],
      timeout: [Array],
      agentRemove: [Function: onRemove],
      error: [Function: socketErrorListener],
      data: [Function: socketOnData],
      drain: [Function: ondrain]
    },
    _eventsCount: 11,
    connecting: false,
    _hadError: false,
    _parent: null,
    _host: 'api.openweathermap.org',
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: BufferList { head: null, tail: null, length: 0 },
      length: 0,
      pipes: [],
      flowing: true,
      ended: false,
      endEmitted: false,
      reading: false,
      sync: false,
      needReadable: true,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: false,
      destroyed: false,
      errored: null,
      closed: false,
      closeEmitted: false,
      defaultEncoding: 'utf8',
      awaitDrainWriters: null,
      multiAwaitDrain: false,
      readingMore: false,
      decoder: null,
      encoding: null,
      [Symbol(kPaused)]: false
    },
    _maxListeners: undefined,
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: false,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: false,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      afterWriteTickInfo: null,
      buffered: [],
      bufferedIndex: 0,
      allBuffers: true,
      allNoop: true,
      pendingcb: 0,
      prefinished: false,
      errorEmitted: false,
      emitClose: false,
      autoDestroy: false,
      errored: null,
      closed: false,
      closeEmitted: false,
      writable: true
    },
    allowHalfOpen: false,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: undefined,
    _server: null,
    ssl: TLSWrap {
      _parent: [TCP],
      _parentWrap: undefined,
      _secureContext: [SecureContext],
      reading: true,
      onkeylog: [Function: onkeylog],
      onhandshakestart: [Function: noop],
      onhandshakedone: [Function (anonymous)],
      onocspresponse: [Function: onocspresponse],
      onnewsession: [Function: onnewsessionclient],
      onerror: [Function: onerror],
      [Symbol(owner_symbol)]: [Circular *1]
    },
    _requestCert: true,
    _rejectUnauthorized: true,
    parser: HTTPParser {
      '1': [Function: parserOnHeaders],
      '2': [Function: parserOnHeadersComplete],
      '3': [Function: parserOnBody],
      '4': [Function: parserOnMessageComplete],
      '5': null,
      '6': null,
      _headers: [],
      _url: '',
      socket: [Circular *1],
      incoming: [Circular *2],
      outgoing: [ClientRequest],
      maxHeaderPairs: 2000,
      _consumed: false,
      onIncoming: [Function: parserOnIncomingClient],
      [Symbol(resource_symbol)]: [HTTPClientAsyncResource]
    },
    _httpMessage: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 1,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: false,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: 0,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      socket: [Circular *1],
      _header: 'GET /data/2.5/weather?q=london&appid=d17aad235635a02dad796d028a9347c4&units=metric HTTP/1.1\r\n' +
        'Host: api.openweathermap.org\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: noopPendingOutput],
      agent: [Agent],
      socketPath: undefined,
      method: 'GET',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      path: '/data/2.5/weather?q=london&appid=d17aad235635a02dad796d028a9347c4&units=metric',
      _ended: false,
      res: [Circular *2],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: [HTTPParser],
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'api.openweathermap.org',
      protocol: 'https:',
      [Symbol(kCapture)]: false,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype]
    },
    [Symbol(res)]: TLSWrap {
      _parent: [TCP],
      _parentWrap: undefined,
      _secureContext: [SecureContext],
      reading: true,
      onkeylog: [Function: onkeylog],
      onhandshakestart: [Function: noop],
      onhandshakedone: [Function (anonymous)],
      onocspresponse: [Function: onocspresponse],
      onnewsession: [Function: onnewsessionclient],
      onerror: [Function: onerror],
      [Symbol(owner_symbol)]: [Circular *1]
    },
    [Symbol(verified)]: true,
    [Symbol(pendingSession)]: null,
    [Symbol(async_id_symbol)]: 16,
    [Symbol(kHandle)]: TLSWrap {
      _parent: [TCP],
      _parentWrap: undefined,
      _secureContext: [SecureContext],
      reading: true,
      onkeylog: [Function: onkeylog],
      onhandshakestart: [Function: noop],
      onhandshakedone: [Function (anonymous)],
      onocspresponse: [Function: onocspresponse],
      onnewsession: [Function: onnewsessionclient],
      onerror: [Function: onerror],
      [Symbol(owner_symbol)]: [Circular *1]
    },
    [Symbol(kSetNoDelay)]: false,
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: null,
    [Symbol(kBuffer)]: null,
    [Symbol(kBufferCb)]: null,
    [Symbol(kBufferGen)]: null,
    [Symbol(kCapture)]: false,
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0,
    [Symbol(connect-options)]: {
      rejectUnauthorized: true,
      ciphers: 'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
      checkServerIdentity: [Function: checkServerIdentity],
      minDHSize: 1024,
      protocol: 'https:',
      hostname: 'api.openweathermap.org',
      hash: '',
      search: '?q=london&appid=d17aad235635a02dad796d028a9347c4&units=metric',
      pathname: '/data/2.5/weather',
      path: null,
      href: 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=d17aad235635a02dad796d028a9347c4&units=metric',
      _defaultAgent: [Agent],
      port: 443,
      host: 'api.openweathermap.org',
      servername: 'api.openweathermap.org',
      _agentKey: 'api.openweathermap.org:443:::::::::::::::::::::',
      encoding: null,
      singleUse: true
    },
    [Symbol(RequestTimeout)]: undefined
  },
  _consuming: false,
  _dumped: false,
  req: <ref *3> ClientRequest {
    _events: [Object: null prototype] {
      prefinish: [Function: requestOnPrefinish]
    },
    _eventsCount: 1,
    _maxListeners: undefined,
    outputData: [],
    outputSize: 0,
    writable: true,
    destroyed: false,
    _last: true,
    chunkedEncoding: false,
    shouldKeepAlive: false,
    _defaultKeepAlive: true,
    useChunkedEncodingByDefault: false,
    sendDate: false,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    _contentLength: 0,
    _hasBody: true,
    _trailer: '',
    finished: true,
    _headerSent: true,
    socket: <ref *1> TLSSocket {
      _tlsOptions: [Object],
      _secureEstablished: true,
      _securePending: false,
      _newSessionPending: false,
      _controlReleased: true,
      secureConnecting: false,
      _SNICallback: null,
      servername: 'api.openweathermap.org',
      alpnProtocol: false,
      authorized: true,
      authorizationError: null,
      encrypted: true,
      _events: [Object: null prototype],
      _eventsCount: 11,
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'api.openweathermap.org',
      _readableState: [ReadableState],
      _maxListeners: undefined,
      _writableState: [WritableState],
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: undefined,
      _server: null,
      ssl: [TLSWrap],
      _requestCert: true,
      _rejectUnauthorized: true,
      parser: [HTTPParser],
      _httpMessage: [Circular *3],
      [Symbol(res)]: [TLSWrap],
      [Symbol(verified)]: true,
      [Symbol(pendingSession)]: null,
      [Symbol(async_id_symbol)]: 16,
      [Symbol(kHandle)]: [TLSWrap],
      [Symbol(kSetNoDelay)]: false,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(connect-options)]: [Object],
      [Symbol(RequestTimeout)]: undefined
    },
    _header: 'GET /data/2.5/weather?q=london&appid=d17aad235635a02dad796d028a9347c4&units=metric HTTP/1.1\r\n' +
      'Host: api.openweathermap.org\r\n' +
      'Connection: close\r\n' +
      '\r\n',
    _keepAliveTimeout: 0,
    _onPendingData: [Function: noopPendingOutput],
    agent: Agent {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      defaultPort: 443,
      protocol: 'https:',
      options: [Object],
      requests: {},
      sockets: [Object],
      freeSockets: {},
      keepAliveMsecs: 1000,
      keepAlive: false,
      maxSockets: Infinity,
      maxFreeSockets: 256,
      scheduling: 'lifo',
      maxTotalSockets: Infinity,
      totalSocketCount: 1,
      maxCachedSessions: 100,
      _sessionCache: [Object],
      [Symbol(kCapture)]: false
    },
    socketPath: undefined,
    method: 'GET',
    maxHeaderSize: undefined,
    insecureHTTPParser: undefined,
    path: '/data/2.5/weather?q=london&appid=d17aad235635a02dad796d028a9347c4&units=metric',
    _ended: false,
    res: [Circular *2],
    aborted: false,
    timeoutCb: null,
    upgradeOrConnect: false,
    parser: HTTPParser {
      '1': [Function: parserOnHeaders],
      '2': [Function: parserOnHeadersComplete],
      '3': [Function: parserOnBody],
      '4': [Function: parserOnMessageComplete],
      '5': null,
      '6': null,
      _headers: [],
      _url: '',
      socket: [TLSSocket],
      incoming: [Circular *2],
      outgoing: [Circular *3],
      maxHeaderPairs: 2000,
      _consumed: false,
      onIncoming: [Function: parserOnIncomingClient],
      [Symbol(resource_symbol)]: [HTTPClientAsyncResource]
    },
    maxHeadersCount: null,
    reusedSocket: false,
    host: 'api.openweathermap.org',
    protocol: 'https:',
    [Symbol(kCapture)]: false,
    [Symbol(kNeedDrain)]: false,
    [Symbol(corked)]: 0,
    [Symbol(kOutHeaders)]: [Object: null prototype] { host: [Array] }
  },
  [Symbol(kCapture)]: false,
  [Symbol(RequestTimeout)]: undefined
}

/-----------------------------------------/


Here When we execute response.on("data", function(data){
    const weatherData = JSON.parse(data);
    console.log(weatherData);
});
We get : Entire JS Object
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
server started at port 3000
200
{
  coord: { lon: -0.1257, lat: 51.5085 },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }
  ],
  base: 'stations',
  main: {
    temp: 14.63,
    feels_like: 14.63,
    temp_min: 12.85,
    temp_max: 16.32,
    pressure: 1013,
    humidity: 95
  },
  visibility: 10000,
  wind: { speed: 1.79, deg: 63, gust: 3.58 },
  clouds: { all: 90 },
  dt: 1624004690,
  sys: {
    type: 2,
    id: 268730,
    country: 'GB',
    sunrise: 1623987763,
    sunset: 1624047637
  },
  timezone: 3600,
  id: 2643743,
  name: 'London',
  cod: 200
}
/--------------------------------/

JSON.stringify(ObjectvarName); 
Converts the Json data to Compact string format

/--------------------------------/

const temp = weatherData.main.temp;
console.log("The temperature is "+ temp + " Deg Cel");

Gets us :
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
server started at port 3000
200
The temperature is 14.57 Deg Cel

/----------------lesson: 244-----------------/

After Executing the final program bit 

[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
server started at port 3000
200
The temperature is 18.19 Deg Cel
The weather in Paris like clear sky.
The weather icon is  01n.
 