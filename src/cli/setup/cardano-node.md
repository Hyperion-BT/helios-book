# Install *cardano-node*

You will need a Linux environment with *docker* for this. 

We have provided convenient docker containers for running *cardano-node*.

```bash
$ git clone https://github.com/Hyperion-BT/cardano-node-wrappers
$ cd cardano-node-wrappers
```

Build and start a *cardano-node* docker container (non-persistent):
```bash
$ make build-preprod

$ make run-preprod # non-persistent, just to check if it works
```

Or persistent:
```bash
$ make run-preprod-persistent # runs in background with a persistent data volume
```

Alternative you can choose `preview`.

These commands will automatically download IOG's latest *cardano-node* image, and then create a named docker volume for storing the blockchain state.

Check that the *cardano-node* container is running using the following command:
```bash
$ docker ps
```
Take note of the container id.

You can stop the container any time:
```bash
$ docker stop <container-id>
```
We recommend using `docker stop` and not `docker rm -f` as it allows *cardano-node* processes to receive the more graceful `SIGTERM` signal (instead of just `SIGKILL`).

You can clean up stopped containers if you are running low on system resources:
```bash
$ docker system prune
```

About 30 seconds after starting the *cardano-node* container, `/ipc/node.socket` should've been created and you can start using `cardano-cli` to query the blockchain. If you are restarting the *cardano-node* after a major upgrade (eg. an HFC) it could take much longer though (an hour or more). If you are impatient you should launch the *cardano-node* container using the docker `run` command without the `-d` flag. This way you can follow the (re)sync progress in your terminal.

Poll for the blockchain sync status using the following command:
```bash
$ docker exec <container-id> cardano-cli query tip --testnet-magic 1097911063
```

The first time it can take up to 10 hours for your *cardano-node* to fully synchronize.
