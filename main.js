document.querySelector('button').addEventListener('click', getFox)


function getFox() {

    fetch('https://randomfox.ca/floof/') 
      .then(res => res.json())
      .then(data => {
        console.log(data)
        document.querySelector('#image1').src = data.image
      })
      .catch(err => {
          console.log(`error ${err}`)
      })

}



