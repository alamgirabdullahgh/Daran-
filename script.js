(function(){
  var root = document.getElementById('ds-root');
  if(!root) return;
  var form = root.querySelector('.ds-search');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var q = form.querySelector('input').value.trim();
    if(q){ alert('সার্চ করা হচ্ছে: ' + q); /* এখানে আপনার সার্চ পেজের লিংক বসান */ }
  });
})();