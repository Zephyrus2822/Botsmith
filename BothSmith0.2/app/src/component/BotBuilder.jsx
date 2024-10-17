import React, { useState } from 'react';
import { Card, CardContent } from '/components/ui/card';
import { Button } from '/components/ui/button';
import { MessageCircle, List, ArrowRight } from 'lucide-react';



const botComponents = [
    { id: 'greeting', content: 'Greeting', icon: MessageCircle },
    { id: 'menu', content: 'Menu', icon: List },
    { id: 'response', content: 'Response', icon: ArrowRight },
  ];

const Botbuilder = () => {

    const [workspace, setWorkspace] = useState([]);

    const onDragStart = (e, id) => {
      e.dataTransfer.setData('text/plain', id);
    };
  
    const onDragOver = (e) => {
      e.preventDefault();
    };
  
    const onDrop = (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData('text');
      const component = botComponents.find(item => item.id === id);
      if (component) {
        setWorkspace([...workspace, { ...component, key: `${component.id}-${Date.now()}` }]);
      }
    };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md">
        <h2 className="text-4xl font-bold p-4">Components</h2>
        <div className="p-2">
          {botComponents.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => onDragStart(e, item.id)}
              className="mb-2 cursor-move"
            >
              <Card>
                <CardContent className="flex items-center p-2">
                  <item.icon className="mr-2" />
                  <span>{item.content}</span>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-2xl h-auto font-bold mb-4">Bot Builder Workspace</h1>
        <div
          onDragOver={onDragOver}
          onDrop={onDrop}
          className="bg-white p-4 rounded-lg min-h-[400px] border-2 border-dashed border-gray-300"
        >
          {workspace.map((item) => (
            <Card key={item.key} className="mb-2">
              <CardContent className="flex justify-between items-center p-2">
                <div className="flex items-center">
                  <item.icon className="mr-2" />
                  <span>{item.content}</span>
                </div>
                <Button variant="outline" size="sm">Edit</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Botbuilder