FROM sitespeedio/node:ubuntu-20.04-nodejs-14.17.6

RUN mkdir -p /home/openwa

WORKDIR /home/openwa

# RUN DEBIAN_FRONTEND="noninteractive" apt-get update \
# && DEBIAN_FRONTEND="noninteractive" apt-get --fix-broken install \
# && DEBIAN_FRONTEND="noninteractive" apt-get install -y libgbm-dev \
# && DEBIAN_FRONTEND="noninteractive" apt-get install -y gconf-service libcurl3-gnutls libcurl3-nss libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget \
# && DEBIAN_FRONTEND="noninteractive" wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
# && DEBIAN_FRONTEND="noninteractive" dpkg -i google-chrome-stable_current_amd64.deb \
# && DEBIAN_FRONTEND="noninteractive" apt-get -y install ffmpeg

RUN DEBIAN_FRONTEND="noninteractive" apt-get update \
&& DEBIAN_FRONTEND="noninteractive" apt-get --fix-broken install \
&& DEBIAN_FRONTEND="noninteractive" apt-get install -y libgbm-dev \
&& DEBIAN_FRONTEND="noninteractive" apt-get install -y gnupg gconf-service libcurl3-gnutls libcurl3-nss libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget ffmpeg

RUN DEBIAN_FRONTEND="noninteractive" wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' | tee /etc/apt/sources.list.d/google-chrome.list 
RUN DEBIAN_FRONTEND="noninteractive" apt update

RUN DEBIAN_FRONTEND="noninteractive" apt install google-chrome-stable fonts-freefont-ttf --no-install-recommends -y \
    && rm -rf /var/lib/apt/lists/*
	
RUN apt upgrade -y

# RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
#    && mkdir -p /home/pptruser/Downloads \
#    && chown -R pptruser:pptruser /home/pptruser 

# USER pptruser

ENV NODE_ENV production

EXPOSE 8000

CMD [ "node", "production.js" ]