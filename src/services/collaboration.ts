import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { MonacoBinding } from 'y-monaco';
import { CollaborationUser } from '../types/collaboration';

export class CollaborationService {
  private doc: Y.Doc;
  private wsProvider: WebsocketProvider;
  private awareness: any;

  constructor(roomId: string) {
    this.doc = new Y.Doc();
    this.wsProvider = new WebsocketProvider(
      'wss://collaboration.smartcontract.studio',
      roomId,
      this.doc
    );
    this.awareness = this.wsProvider.awareness;
  }

  setupEditorBinding(editor: any) {
    const yText = this.doc.getText('monaco');
    new MonacoBinding(yText, editor.getModel(), new Set([editor]), this.awareness);
  }

  updateCursor(position: { line: number; column: number }) {
    this.awareness.setLocalStateField('cursor', position);
  }

  onUserChange(callback: (users: CollaborationUser[]) => void) {
    this.awareness.on('change', () => {
      const users = Array.from(this.awareness.getStates().entries())
        .map(([clientId, state]: [number, any]) => ({
          id: clientId.toString(),
          name: state.user?.name || `User ${clientId}`,
          color: state.user?.color,
          cursor: state.cursor
        }));
      callback(users);
    });
  }
}