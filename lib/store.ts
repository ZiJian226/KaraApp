import { Song } from './types'

// Shared in-memory data store
// In production, this would be replaced with a database
class DataStore {
  private queue: Song[] = []
  private history: Song[] = []
  private currentSong: Song | null = null

  getQueue(): Song[] {
    return this.queue
  }

  getHistory(): Song[] {
    return this.history
  }

  getCurrentSong(): Song | null {
    return this.currentSong
  }

  setQueue(queue: Song[]): void {
    this.queue = queue
  }

  setHistory(history: Song[]): void {
    this.history = history
  }

  setCurrentSong(song: Song | null): void {
    this.currentSong = song
  }

  getAllData() {
    return {
      queue: this.queue,
      history: this.history,
      currentSong: this.currentSong,
    }
  }

  updateAllData(queue: Song[], history: Song[], currentSong: Song | null) {
    this.queue = queue
    this.history = history
    this.currentSong = currentSong
  }
}

// Export singleton instance
export const dataStore = new DataStore()
