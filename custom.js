const quotes = [
  {
    quote: `"Nếu mày giỏi việc gì thì đừng bao giờ làm nó miễn phí."`,
    writer: `– Joker –`
  },

  {
    quote: `"Khi bạn chưa giỏi cái gì thì đó là tại bạn chưa dành đủ thời gian cho nó."`,
    writer: `– Hoàng Bụng Phệ –`
  },

  {
    quote: `"Nếu muốn tỏa sáng được như mặt trời, trước hết ngươi cần phải bị thiêu cháy giống nó."`,
    writer: `– Adolf Hitler –`
  },

  {
    quote: `"Nếu muốn người ta sẽ tìm cách, còn nếu không muốn người ta sẽ tìm lý do."`,
    writer: `– Ms. Chanh –`
  },

  {
    quote: `"Cái người đời thường thiếu là ý chí chứ không phải là sức mạnh."`,
    writer: `– Victor Hugo –`
  },

  {
    quote: `"Cuối cùng, điều quan trọng nhất là con người bạn trở thành chứ không phải điều bạn đạt được."`,
    writer: `– Les Brown –`
  },

  {
    quote: `"Học, học nữa, học mãi."`,
    writer: `– Lê Nin –`
  },

]

let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");



btn.addEventListener("click", function() {
  let random = Math.floor(Math.random() * quotes.length);
  
  quote.innerHTML = quotes[random].quote;

  
  writer.innerHTML = quotes[random].writer;
})
