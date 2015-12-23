@echo off

IF NOT EXIST server\CattleTrack\CattleTrack.Web\client (
  MKDIR server\CattleTrack\CattleTrack.Web\client
)

copy client\public\ server\CattleTrack\CattleTrack.Web\client\ /Y
