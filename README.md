## TorKameleon

TorKameleon is a solution designed to protect Tor users with increased censorship resistance against powerful traffic correlation attacks carried out by global adversaries. The system is based on flexible K-anonymization input circuits that can support TLS tunneling and WebRTC-based covert channels before forwarding users' original input traffic to the Tor network. Our goal is to protect users from correlation attacks through machine learning between incoming user traffic and the observed traffic at different Tor network intermediate relays or outgoing traffic to destinations. TorKameleon is the first system to implement a Tor pluggable transport based on both parameterizable TLS tunneling or WebRTC media as covert channels. We have implemented the TorKameleon prototype and performed extensive validations to observe the correctness and experimental performance of the proposed solution in the Tor environment.

## Repo Folders
The repository currently consists of four different folders: 
*The Client folder, which contains the code and configuration files for the client simulator Java program;
*The Deployment folder, which contains the Docker and configuration files for deploying TorKameleon in different modes and for deploying all the necessary components to create the setup described below;
*The HttpServer folder, which contains the code and configuration files for the HTTP Java server;
*The PT folder, which contains the code and configuration files for the TorKameleon software (including the necessary WebRTC-based application code and configuration files).


## Prerequisites

## Setup


In our experiments, we used a setup similar to the one shown in the figure above. There are five main components in this setup: 
* The local machine, which is used as the client and runs the TorKameleon Proxy locally;
* The TorKameleon Proxy, which receives the encapsulated data from the local machine via a WebRTC-based covert channel or TLS tunnel;
* The TorKameleon Tor Bridge, which receives the encapsulated data from the TorKameleon Proxy over a WebRTC-based covert channel or TLS tunnel;
* The HTTP server, which is used as the final destination for the client (the HTTP server can also be deployed as a hidden service);
* The STUN / TURN server used as a STUN and or TURN server for the WebRTC connections.

The setup can also be used without the Tor network component (TorKameleon Tor Bridge, Tor Middle Relay, and Tor Exit Relay) by forwarding traffic between the local machine and the proxy and from the proxy to the HTTP server, or without the proxy component by having the local machine forward traffic directly to the TorKameleon Tor Bridge.


## Configuration

### WebRTC Config Files


### TorKameleon Core Config Files


### Deployment
The deployment folder contains two folders, teh Coturn and the Setup folder. These folders are:



each with a Docker Compose deployment for a specific TorKameleon mode


## Usage



