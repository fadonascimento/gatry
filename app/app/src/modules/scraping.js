
class GatryScraping {

  async getResults(){
    const response = await fetch('/api/results');
    const results = await response.json();
    return results;
  }

  async getUpdates() {
    const response = await fetch('/api/check-updates/:timestamp');
    const updates = await response.json();
    return updates;
  }
}

export default GatryScraping;