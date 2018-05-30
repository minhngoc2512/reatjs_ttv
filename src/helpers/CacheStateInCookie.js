export default class CacheApiToCookie {
  constructor() {
    this.apiNeedToCached = {
      provinces: "/province",
      taxonomy: "/taxonomy",
      job_salary: "/job_salary",
      job_experience: "/job_experience",
      job_carrer: "/job_carrer"
    };
    this.stateWillBeCached = {};

    return this.cacheIt();
  }

  cacheIt() {
    this.apiNeedToCached.map(item => {
      console.log(item);
    });
    return this.stateWillBeCached;
  }
}
