function ready(map_data) {
  const options_map = map_data;

  const map = new Flourish.Live(options_map);
}

const au = d3.json('aus.json');

Promise.all([au]).then(res => {
  ready(res[0], res[1]);
});
