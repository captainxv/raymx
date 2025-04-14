// /managers/NotificationManager.ts

import { writable, type Writable } from 'svelte/store';

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  timeout?: number; // in milliseconds; if set, auto-remove after timeout
}

export class NotificationManager {
  notifications: Writable<Notification[]>;

  constructor() {
    this.notifications = writable([]);
  }

  addNotification(notification: Notification) {
    this.notifications.update(notifs => [...notifs, notification]);

    if (notification.timeout) {
      setTimeout(() => {
        this.removeNotification(notification.id);
      }, notification.timeout);
    }
  }

  removeNotification(notificationId: string) {
    this.notifications.update(notifs => notifs.filter(n => n.id !== notificationId));
  }

  clearNotifications() {
    this.notifications.set([]);
  }
}

// Export an instance to be used across the app.
export const notificationManager = new NotificationManager();
