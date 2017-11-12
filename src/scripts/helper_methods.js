
const months = {
  0: "January",
  1: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
}

class PostDataHelpers {

  formatDatesForMultiplePost(posts) {
    const formattedPosts = [...posts];
    posts.forEach((post) => {
      const date = new Date(post.node.date)
      post.node.year = date.getFullYear()
      post.node.month = months[date.getMonth()]
    })
    return formattedPosts;
  }
}


class Formatters {
  formatDate(date) {
    console.log(date)
  }
}


export { PostDataHelpers }
