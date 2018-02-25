var Job =  function(){
    this.pays =  true;
  }
  
  
  Job.prototype.print = function(){
    console.log(this.pays ? 'Hire For ' + this.title:'No thanks');
  }
  
  Job.prototype.getTitle = function(){
    console.log(this.title);
  }
  
  
  
  var TechJob =  function(title,pays){
    Job.call(this);
    this.title = title;
    this.pays  = pays;
  }
  
  TechJob.prototype = Object.create(Job.prototype);
  TechJob.prototype.constructor = TechJob;
  
  var js = new TechJob('JS',true);
  
  js.print();
  
  
  var se = new TechJob('SE',true);
  
  se.print();
  se.getTitle();