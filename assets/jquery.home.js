



$(() => {
  //random background colors
  let projects = document.querySelectorAll('.stream-item.project')
  let tools = document.querySelectorAll('.stream-item.tool')
  let colors = ['#ED6D7D', '#4A90E2', '#F4EC87']
  projects.forEach(project => {
    project.style.background = colors[Math.floor(Math.random() * colors.length)]
  })
  tools.forEach(tool => {
    tool.style.background = colors[Math.floor(Math.random() * colors.length)]
  })
})
