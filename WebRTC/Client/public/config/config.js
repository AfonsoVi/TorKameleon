window.webrtc = {
    iceServers: [{
        urls: [ "stun:fr-turn1.xirsys.com" ]
     }, {
        username: "1SEaaw1t7eUc5HuxjRp-S_0CIS2C01gdSeQyaRB683wtYrOb_eTnhIz4ItFi_tgHAAAAAGLEyiFtb3ZlZ2E0MDQz",
        credential: "c8454eee-fcba-11ec-aa9b-0242ac120004",
        urls: [
            "turn:fr-turn1.xirsys.com:80?transport=udp",
            "turn:fr-turn1.xirsys.com:3478?transport=udp",
            "turn:fr-turn1.xirsys.com:80?transport=tcp",
            "turn:fr-turn1.xirsys.com:3478?transport=tcp",
            "turns:fr-turn1.xirsys.com:443?transport=tcp",
            "turns:fr-turn1.xirsys.com:5349?transport=tcp"
        ]
     }],
     
    encodedInsertableStreams: true
};

//window.signalling_server = ['wss://5.196.26.66:8000'];
window.signalling_server = ['null','wss://5.196.26.66:8000'];
window.tor_conn_addr = 'ws://localhost:4444';
window.local_node_addr = 'ws://localhost:8001';
