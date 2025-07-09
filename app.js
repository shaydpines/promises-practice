
const statusRef = document.querySelector('.status')
const videoText = document.querySelector('.video__text')

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('VIP');
    }, 2000);
  });
}

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === 'VIP') {
      resolve("show video")
    }
    else if (subscriptionStatus === 'FREE') {
      resolve("show trailer")
    }
    else {
      reject("no video")
    }
  })
}

async function main() {
  const status = (await getSubscriptionStatus());
  statusRef.innerHTML = status
  try{
    console.log(await getVideo(status))
  }
  catch (e) {
    videoText.innerHTML = e
  }
}


main();
