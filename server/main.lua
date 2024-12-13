lib.versionCheck('Qbox-project/qbx_helicam')

RegisterNetEvent('qbx_helicam:server:toggleSpotlightState', function(netId)
    local vehicle = NetworkGetEntityFromNetworkId(netId)

    if not DoesEntityExist(vehicle) or GetVehicleType(vehicle) ~= 'heli' then return end

    local spotlightStatus = Entity(vehicle).state.spotlight

    Entity(vehicle).state:set('spotlight', not spotlightStatus, true)
end)