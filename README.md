# SOCKSv5 Proxy

This tutorial will guide you through the steps to use the SOCKSv5 Proxy.

## Prerequisites

- Basic understanding of networking concepts
- Installed SOCKSv5 Proxy software

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/socksv5-proxy.git
    cd socksv5-proxy
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the proxy server:
    ```sh
    npm start
    ```

2. Configure your application to use the proxy:
    - Set the proxy address to `localhost`
    - Set the proxy port to `1080`

## Testing

To verify that the proxy is working, you can use a tool like `curl`:
```sh
curl --proxy socks5h://localhost:1080 http://example.com
```

## Troubleshooting

- Ensure the proxy server is running
- Check the proxy address and port configuration

## Contributing

Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.
