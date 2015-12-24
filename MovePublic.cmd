@echo off
cd %~dp0

IF NOT EXIST server\CattleTrack\CattleTrack.Web\client (
  MKDIR server\CattleTrack\CattleTrack.Web\client
)

cd client

call webpack

cd %~dp0

copy client\public\ server\CattleTrack\CattleTrack.Web\client\ /Y
