-- chatroom.lua

-- === State ===
Members = Members or {}         
AuditLog = AuditLog or {}       
RateLimitSeconds = 5            

-- === Utility Functions ===

local function now()
  return tonumber(os.date("%s"))
end

local function is_registered(pid)
  return Members[pid] ~= nil
end

local function is_admin(pid)
  return is_registered(pid) and Members[pid].role == "admin"
end

local function set_member(pid, role)
  Members[pid] = { role = role or "user", lastSent = 0 }
end

local function log(event, data)
  table.insert(AuditLog, { ts = now(), event = event, data = data })
end

-- === Handlers ===

-- Register
Handlers.add("Register", { Action = "Register" }, function(msg)
  if not is_registered(msg.From) then
    local role = next(Members) == nil and "admin" or "user"  
    set_member(msg.From, role)
    log("register", { who = msg.From, role = role })
    print("[Chatroom] " .. msg.From .. " registered as " .. role)
    msg.reply({ Data = "Registered as " .. role })
  else
    msg.reply({ Data = "Already registered." })
  end
end)

-- Unregister
Handlers.add("Unregister", { Action = "Unregister" }, function(msg)
  if is_registered(msg.From) then
    Members[msg.From] = nil
    log("unregister", { who = msg.From })
    print("[Chatroom] " .. msg.From .. " unregistered.")
    msg.reply({ Data = "You have been unregistered." })
  else
    msg.reply({ Data = "You are not registered." })
  end
end)

-- Broadcast
Handlers.add("Broadcast", { Action = "Broadcast" }, function(msg)
  local sender = msg.From
  if not is_registered(sender) then
    msg.reply({ Data = "Please register first." })
    return
  end

  local nowTime = now()
  local lastSent = Members[sender].lastSent or 0

  if nowTime - lastSent < RateLimitSeconds then
    msg.reply({ Data = "Rate limit exceeded. Please wait." })
    return
  end

  Members[sender].lastSent = nowTime
  local sentCount = 0

  for pid in pairs(Members) do
    ao.send({ Target = pid, Data = "[Broadcast from " .. sender .. "]: " .. msg.Data })
    sentCount = sentCount + 1
  end

  log("broadcast", { from = sender, message = msg.Data, count = sentCount })
  print("[Chatroom] Broadcast from " .. sender .. " to " .. sentCount .. " members.")
  msg.reply({ Data = "Broadcasted to " .. sentCount .. " member(s)." })
end)

-- Private Message
Handlers.add("PrivateMessage", { Action = "PM" }, function(msg)
  local from = msg.From
  local to = msg.To
  local message = msg.Data

  if not (is_registered(from) and is_registered(to)) then
    msg.reply({ Data = "Both sender and recipient must be registered." })
    return
  end

  ao.send({ Target = to, Data = "[PM from " .. from .. "]: " .. message })
  log("private_message", { from = from, to = to, message = message })
  print("[Chatroom] PM from " .. from .. " to " .. to)
  msg.reply({ Data = "Message sent to " .. to })
end)

-- List Members
Handlers.add("List", { Action = "List" }, function(msg)
  local summary = {}
  for pid, info in pairs(Members) do
    table.insert(summary, pid .. " (" .. info.role .. ")")
  end
  msg.reply({ Data = summary })
end)
