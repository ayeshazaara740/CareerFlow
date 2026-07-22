// Authentication and user session management for CareerFlow
const AUTH_KEYS = {
  users: 'careerflow-users',
  current: 'careerflow-current-user',
  sessions: 'careerflow-sessions'
};

// Initialize default users
function initializeAuth() {
  const existing = localStorage.getItem(AUTH_KEYS.users);
  if (!existing) {
    const defaultUsers = [
      {
        id: 'user-1',
        email: 'admin@careerflow.com',
        password: '123456', // Demo password
        name: 'Admin User',
        type: 'employer',
        createdAt: new Date().toISOString()
      }
    ];
    localStorage.setItem(AUTH_KEYS.users, JSON.stringify(defaultUsers));
  }
}

// Get all registered users
function getAllUsers() {
  const raw = localStorage.getItem(AUTH_KEYS.users);
  if (!raw) {
    initializeAuth();
    return getAllUsers();
  }
  try {
    return JSON.parse(raw);
  } catch (error) {
    console.warn('Unable to parse users', error);
    return [];
  }
}

// Register new user
function registerUser(data) {
  const users = getAllUsers();
  const exists = users.some((user) => user.email === data.email);
  if (exists) {
    return { success: false, message: 'Email already registered' };
  }
  const newUser = {
    id: `user-${Date.now()}`,
    email: data.email,
    password: data.password,
    name: data.name,
    type: data.type || 'candidate',
    createdAt: new Date().toISOString()
  };
  users.push(newUser);
  localStorage.setItem(AUTH_KEYS.users, JSON.stringify(users));
  return { success: true, user: newUser };
}

// Login user
function loginUser(email, password) {
  const users = getAllUsers();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return { success: false, message: 'Invalid credentials' };
  }
  const session = {
    userId: user.id,
    email: user.email,
    name: user.name,
    type: user.type,
    loginTime: new Date().toISOString()
  };
  localStorage.setItem(AUTH_KEYS.current, JSON.stringify(session));
  return { success: true, user: session };
}

// Get current user session
function getCurrentUser() {
  const raw = localStorage.getItem(AUTH_KEYS.current);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// Logout user
function logoutUser() {
  localStorage.removeItem(AUTH_KEYS.current);
}

// Initialize on load
initializeAuth();
