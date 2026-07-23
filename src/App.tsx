/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import { Plus, Check, Trash2, Circle, ChevronDown, CheckSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const [inputValue, setInputValue] = useState('');
  const [showLimitations, setShowLimitations] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <h1 className="flex items-center gap-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            <CheckSquare className="h-8 w-8" />
            Track Tasks
          </h1>
          <p className="mt-2 text-center text-sm text-slate-500 dark:text-slate-400">
            Track tasks using Web Storage API's Local Storage.
          </p>
          <div className="mt-4 w-full text-left text-xs text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-lg shadow-sm overflow-hidden transition-all duration-200">
            <button
              type="button"
              onClick={() => setShowLimitations(!showLimitations)}
              className="flex items-center justify-between w-full p-3 focus:outline-none hover:bg-amber-100/50 dark:hover:bg-amber-900/20"
            >
              <div className="flex items-center space-x-2">
                <span className="text-base leading-none">⚠️</span>
                <strong>Limitations of Web Storage API's Local Storage</strong>
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showLimitations ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {showLimitations && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-3 pt-0 border-t border-amber-200/50 dark:border-amber-900/30">
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>Data Loss:</strong> If you clear your browser's site data or cache, your tasks will be permanently lost.</li>
                      <li><strong>Security (XSS):</strong> Vulnerable to Cross-Site Scripting attacks. Do not store highly sensitive information.</li>
                      <li><strong>Storage Limits:</strong> Browsers limit this storage to ~5MB. Not suitable for massive data.</li>
                      <li><strong>Performance:</strong> Operations are synchronous and can block the main thread if data gets too large.</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="block w-full rounded-xl border-0 py-4 pl-4 pr-12 text-slate-900 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white shadow-sm transition-all duration-200 dark:bg-slate-800 dark:text-slate-50 dark:ring-slate-700 dark:placeholder:text-slate-500 dark:focus:ring-indigo-500"
              placeholder="What needs to be done?"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="absolute inset-y-0 right-0 flex items-center pr-3 disabled:opacity-50 transition-opacity"
            >
              <div className="rounded-md p-1 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors dark:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-500/20">
                <Plus className="h-5 w-5" aria-hidden="true" />
              </div>
            </button>
          </div>
        </form>

        <div className="mt-8 bg-white overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
          <ul className="divide-y divide-slate-100 dark:divide-slate-800/50">
            <AnimatePresence mode="popLayout">
              {tasks.length === 0 ? (
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="px-4 py-8 text-center text-sm text-slate-500 dark:text-slate-400"
                >
                  No tasks yet. Add one above!
                </motion.li>
              ) : (
                tasks.map((task) => (
                  <motion.li
                    key={task.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    className="flex items-center justify-between px-4 py-4 sm:px-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                  >
                    <div className="flex items-center min-w-0 gap-3">
                      <button
                        onClick={() => toggleTask(task.id)}
                        className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border transition-colors ${
                          task.completed
                            ? 'bg-indigo-600 border-indigo-600 text-white dark:bg-indigo-500 dark:border-indigo-500'
                            : 'border-slate-300 text-transparent hover:border-indigo-400 dark:border-slate-700 dark:hover:border-indigo-500'
                        }`}
                      >
                        {task.completed ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Circle className="h-4 w-4 opacity-0 group-hover:opacity-20 transition-opacity text-indigo-400 dark:text-indigo-500" />
                        )}
                      </button>
                      <span
                        className={`text-sm truncate transition-all duration-200 ${
                          task.completed ? 'text-slate-400 line-through dark:text-slate-500' : 'text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        {task.text}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="ml-4 flex-shrink-0 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 p-2 rounded-md hover:bg-red-50 dark:text-slate-500 dark:hover:text-red-400 dark:hover:bg-red-500/10"
                      aria-label="Delete task."
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </motion.li>
                ))
              )}
            </AnimatePresence>
          </ul>
        </div>

        {tasks.length > 0 && (
          <div className="flex justify-between items-center text-xs text-slate-400 dark:text-slate-500 mt-4 px-2">
            <span>{tasks.filter(t => !t.completed).length} items left.</span>
            {tasks.some(t => t.completed) && (
              <button
                onClick={() => tasks.filter(t => t.completed).forEach(t => deleteTask(t.id))}
                className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
              >
                Clear completed.
              </button>
            )}
          </div>
        )}

      </div>
<div className="mt-auto pt-8 pb-4 text-center text-xs text-slate-400 dark:text-slate-500">
        <p>
          Built from <code className="font-mono">{import.meta.env.VITE_GIT_COMMIT_SHA_8_CHAR ?? 'dev'}</code>. Made with 💚 by{' '}
          <a
            href="https://github.com/sheeeng/track-tasks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 underline underline-offset-2 transition-colors"
          >
            Leonard
          </a>
          .
        </p>
      </div>
    </div>
  );
}
