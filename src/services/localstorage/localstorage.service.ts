class LocalstorageService {
  public async getItemByName(name: string): Promise<string> {
    const data = localStorage.getItem(name);
    return data || '';
  }

  public async setItem(name: string, value: any) {
    const data = JSON.stringify(value);
    return localStorage.setItem(name, data);
  }
}

export default new LocalstorageService();
